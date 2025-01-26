"use server";

import type { contactFormSchema } from "@/app/about/contact-form";
import { MessageType, sendSlackMessage } from "@/utils/slack";
import type { z } from "zod";

export async function contactFormAction(
  formData: z.infer<typeof contactFormSchema>,
) {
  await sendSlackMessage(MessageType.Contact, formData);
}
