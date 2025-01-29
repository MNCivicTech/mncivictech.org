import { type RefObject, useEffect, useState } from "react";

// FIXME: create type for this
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
declare const turnstile: any;

export default function useTurnstile(
  ref: RefObject<HTMLDivElement>,
  updateToken: (token: string) => void,
) {
  const [turnstileWidgetId, setTurnstileWidgetId] = useState("");

  function buildTurnstile() {
    const widgetId = turnstile.render(ref.current, {
      sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "",
      language: "en",
      execution: "render",
      callback: (token: string) => {
        updateToken(token); // update token
      },
      "expired-callback": (ref: RefObject<HTMLDivElement>) => {
        updateToken(""); // reset token

        turnstile.reset(ref.current);
        turnstile.execute(ref.current);
      },
    });

    setTurnstileWidgetId(widgetId);
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
  };
}
