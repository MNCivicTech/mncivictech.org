"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Invalid message" }),
  // newsletter: z.boolean(),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      // newsletter: false,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // FIXME: Set up slack hook
    console.log(values);

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Form submitted successfully!");
      form.reset();
    }, 1000);
  }

  return (
    <div className="mx-auto my-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-2xl space-y-6"
        >
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

          {/*<FormField*/}
          {/*  control={form.control}*/}
          {/*  name="newsletter"*/}
          {/*  render={({ field }) => (*/}
          {/*    <FormItem className="flex flex-row items-center space-x-3 space-y-0">*/}
          {/*      <FormControl>*/}
          {/*        <Checkbox*/}
          {/*          checked={field.value}*/}
          {/*          onCheckedChange={(checked) => field.onChange(checked)}*/}
          {/*        />*/}
          {/*      </FormControl>*/}
          {/*      <FormLabel>Opt into the newsletter</FormLabel>*/}
          {/*    </FormItem>*/}
          {/*  )}*/}
          {/*/>*/}

          <Button
            type="submit"
            disabled={isSubmitting}
            variant="brown"
            className="w-full md:w-36"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
