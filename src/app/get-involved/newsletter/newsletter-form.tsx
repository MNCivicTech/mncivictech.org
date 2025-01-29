"use client";

import { newsletterFormAction } from "@/app/get-involved/newsletter/newsletter-form-action";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const newsletterFormSchema = z.object({
  fullName: z.string().min(2, { message: "Required" }),
  email: z.string().email({ message: "Invalid email address" }),
});

export default function NewsletterForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof newsletterFormSchema>>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    startTransition(async () => {
      try {
        await newsletterFormAction(data);

        alert("Thank you for signing up!");
        form.reset();
      } catch (error) {
        console.error(error);
        alert("There was an error signing up. Please try again later.");
      }
    });
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="max-w-3xl space-y-6">
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
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isPending} className="w-full md:w-36">
          Sign up
        </Button>
      </form>
    </Form>
  );
}
