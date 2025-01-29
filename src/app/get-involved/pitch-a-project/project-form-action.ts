"use server";

import type { projectFormSchema } from "@/app/get-involved/pitch-a-project/pitch-form";
import { MessageType, sendSlackMessage } from "@/utils/slack";
import { verifyTurnstile } from "@/utils/turnstile";
import type { z } from "zod";

export async function projectFormAction(
  formData: z.infer<typeof projectFormSchema>,
) {
  if (!(await verifyTurnstile(formData.turnstileToken))) {
    throw new Error("Invalid Turnstile token");
  }

  await sendSlackMessage(MessageType.Project, formData);
}
