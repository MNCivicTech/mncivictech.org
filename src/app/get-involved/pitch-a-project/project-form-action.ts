"use server";

import type { projectFormSchema } from "@/app/get-involved/pitch-a-project/pitch-form";
import { MessageType, sendSlackMessage } from "@/utils/slack";
import type { z } from "zod";

export async function projectFormAction(
  formData: z.infer<typeof projectFormSchema>,
) {
  await sendSlackMessage(MessageType.Project, formData);
}
