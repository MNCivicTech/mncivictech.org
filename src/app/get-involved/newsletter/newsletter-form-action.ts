"use server";

import type { newsletterFormSchema } from "@/app/get-involved/newsletter/newsletter-form";
import type { z } from "zod";

export async function newsletterFormAction(
  formData: z.infer<typeof newsletterFormSchema>,
) {
  // FIXME: Add contact to email provider
  console.log(formData);

  return;
}
