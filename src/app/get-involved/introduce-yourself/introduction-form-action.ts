"use server";

import type { introductionFormSchema } from "@/app/get-involved/introduce-yourself/introduction-form";
import { MessageType, sendSlackMessage } from "@/utils/slack";
import { verifyTurnstile } from "@/utils/turnstile";
import type { z } from "zod";

export async function introductionFormAction(
  formData: z.infer<typeof introductionFormSchema>,
) {
  if (!(await verifyTurnstile(formData.turnstileToken))) {
    throw new Error("Invalid Turnstile token");
  }

  await sendSlackMessage(MessageType.Introduction, formData);
}
