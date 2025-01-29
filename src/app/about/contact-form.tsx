"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Script from "next/script";
import { useRef, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { contactFormAction } from "@/app/about/contact-form-action";
import { useTurnstile } from "@/hooks/useTurnstile";
import { Button } from "@/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/Form";
import { Input } from "@/ui/Input";
import { Textarea } from "@/ui/Textarea";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: "Required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Invalid message" }),
  turnstileToken: z
    .string()
    .min(1, { message: "You must verify you're human" }),
});

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      turnstileToken: "",
    },
  });

  const { buildTurnstile, resetTurnstile } = useTurnstile(
    ref,
    (token: string) => form.setValue("turnstileToken", token),
  );

  const onSubmit = form.handleSubmit((data) => {
    startTransition(async () => {
      try {
        await contactFormAction(data);

        alert(
          "Thank you for reaching out! Your message has been successfully submitted. We will get back to you as soon as possible.",
        );
        form.reset();
      } catch (error) {
        alert(
          "There was an error submitting your message. Please try again later.",
        );

        resetTurnstile(ref);
      }
    });
  });

  return (
    <div className="mx-auto my-8">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
        onReady={buildTurnstile}
      />

      <Form {...form}>
        <form onSubmit={onSubmit} className="max-w-2xl space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message *</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="turnstileToken"
            render={() => (
              <FormItem>
                <FormControl>
                  <div
                    ref={ref}
                    data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isPending}
            variant="green"
            className="w-full md:w-36"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
