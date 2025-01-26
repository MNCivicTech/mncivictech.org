"use server";

import type { introductionFormSchema } from "@/app/get-involved/introduce-yourself/introduction-form";
import { MessageType, sendSlackMessage } from "@/utils/slack";
import type { z } from "zod";

export async function introductionFormAction(
  formData: z.infer<typeof introductionFormSchema>,
) {
  await sendSlackMessage(MessageType.Introduction, formData);
}
