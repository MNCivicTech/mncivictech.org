"use client";

import { type RefObject, useEffect, useState } from "react";

declare const turnstile: {
  render: (
    element: string | HTMLElement,
    options: {
      sitekey: string;
      language: string;
      execution: "render" | "execute";
      callback: (token: string) => void;
      "expired-callback": (ref: RefObject<HTMLDivElement>) => void;
    },
  ) => string;
  remove: (widgetId: string) => void;
  execute: (element: string | HTMLElement) => void;
  reset: (element: string | HTMLElement) => void;
};

export function useTurnstile(
  ref: RefObject<HTMLDivElement>,
  updateToken: (token: string) => void,
) {
  const [turnstileWidgetId, setTurnstileWidgetId] = useState("");

  // mount and render turnstile widget
  function buildTurnstile() {
    if (ref.current == null) {
      return;
    }

    const widgetId = turnstile.render(ref.current, {
      sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "",
      language: "en",
      execution: "render",
      callback: (token: string) => {
        updateToken(token); // update token
      },
      "expired-callback": (ref: RefObject<HTMLDivElement>) => {
        updateToken(""); // reset token

        if (ref.current == null) {
          return;
        }

        turnstile.reset(ref.current);
        turnstile.execute(ref.current);
      },
    });

    setTurnstileWidgetId(widgetId);
  }

  // if validation failed, we can reset the turnstile widget
  function resetTurnstile(ref: RefObject<HTMLDivElement>) {
    if (ref.current == null) {
      return;
    }

    turnstile.reset(ref.current);
    turnstile.execute(ref.current);
  }

  // remove turnstile widget when component unmounts
  useEffect(() => {
    return () => {
      if (turnstileWidgetId) {
        turnstile.remove(turnstileWidgetId);
      }
    };
  }, [turnstileWidgetId]);

  return {
    buildTurnstile,
    resetTurnstile,
  };
}
