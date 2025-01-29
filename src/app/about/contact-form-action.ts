"use server";

import type { contactFormSchema } from "@/app/about/contact-form";
import { MessageType, sendSlackMessage } from "@/utils/slack";
import { verifyTurnstile } from "@/utils/turnstile";
import type { z } from "zod";

export async function contactFormAction(
  formData: z.infer<typeof contactFormSchema>,
) {
  if (!(await verifyTurnstile(formData.turnstileToken))) {
    throw new Error("Invalid Turnstile token");
  }

  await sendSlackMessage(MessageType.Contact, formData);
}
