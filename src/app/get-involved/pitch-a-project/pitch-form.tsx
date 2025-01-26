"use client";

import { projectFormAction } from "@/app/get-involved/pitch-a-project/project-form-action";
import { Button } from "@/ui/Button";
import { Checkbox } from "@/ui/Checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/Form";
import { Input } from "@/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/Select";
import { Textarea } from "@/ui/Textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const requirements = [
  "Open Source",
  "For the community",
  "Volunteer driven",
  "Not for profit",
];

const progressOptions = [
  "Just an idea",
  "Started researching",
  "Started building",
  "Built a prototype",
];

const helpNeededOptions = [
  "Software Engineering",
  "Project Management",
  "Design",
  "User Research",
  "Copy / Content writing",
  "Data Science / Data Analytics",
  "Industry Knowledge / Expertise",
];

export const projectFormSchema = z.object({
  fullName: z.string().min(2, { message: "Required" }),
  email: z.string().email({ message: "Invalid email address" }),
  explanation: z.string().min(1, { message: "Required" }),
  requirements: z
    .array(z.string())
    .min(4, { message: "Must meet all four requirements" }),
  progress: z.string().min(1, { message: "Required" }),
  helpNeeded: z.array(z.string()).optional(),
  anythingElse: z.string().optional(),
});

export default function PitchForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof projectFormSchema>>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      explanation: "",
      requirements: [],
      progress: "",
      helpNeeded: [],
      anythingElse: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    startTransition(async () => {
      await projectFormAction(data);

      alert(
        "Thank you for reaching out! Your message has been successfully submitted. We will get back to you as soon as possible.",
      );
      form.reset();
    });
  });

  return (
    <div className="mx-auto my-8">
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
            name="explanation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brief explanation (2-3 sentences) *</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="requirements"
            render={() => (
              <FormItem>
                <FormLabel>
                  Does this project meet the following requirements? *
                </FormLabel>
                <div className="grid grid-cols-1 gap-2">
                  {requirements.map((requirement) => (
                    <FormField
                      key={requirement}
                      control={form.control}
                      name="requirements"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={requirement}
                            className="flex flex-row items-center space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(requirement)}
                                onCheckedChange={(checked) => {
                                  return checked && field.value
                                    ? field.onChange([
                                        ...field.value,
                                        requirement,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== requirement,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {requirement}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="progress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How much progress have you made? *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {progressOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="helpNeeded"
            render={() => (
              <FormItem>
                <FormLabel>What do you need help with? (Optional)</FormLabel>
                <FormDescription>Select all that apply</FormDescription>
                <div className="grid grid-cols-2 gap-2">
                  {helpNeededOptions.map((helpNeededOption) => (
                    <FormField
                      key={helpNeededOption}
                      control={form.control}
                      name="helpNeeded"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={helpNeededOption}
                            className="flex flex-row items-center space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(
                                  helpNeededOption,
                                )}
                                onCheckedChange={(checked) => {
                                  return checked && field.value
                                    ? field.onChange([
                                        ...field.value,
                                        helpNeededOption,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== helpNeededOption,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {helpNeededOption}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="anythingElse"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Anything else worth mentioning? (Optional)
                </FormLabel>
                <FormControl>
                  <Textarea {...field} />
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
