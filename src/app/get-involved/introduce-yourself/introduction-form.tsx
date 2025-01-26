"use client";

import { introductionFormAction } from "@/app/get-involved/introduce-yourself/introduction-form-action";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C#",
  "Ruby",
  "Go",
  "PHP",
  "HTML",
  "CSS",
  "SQL",
  "MongoDB",
  "GraphQL",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "GCP",
];

const disciplines = [
  "Engineering",
  "Design",
  "Product",
  "Data",
  "Marketing",
  "Business",
];

const interestOptions = ["Projects", "Networking", "Learning", "Social"];

export const introductionFormSchema = z.object({
  fullName: z.string().min(2, { message: "Required" }),
  email: z.string().email({ message: "Invalid email address" }),
  skills: z.array(z.string()).optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  interest: z.string().optional(),
  currentCompany: z.string().optional(),
  currentRole: z.string().optional(),
  disciplines: z.array(z.string()).optional(),
  // newsletter: z.boolean(),
});

export default function IntroductionForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof introductionFormSchema>>({
    resolver: zodResolver(introductionFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      skills: [],
      linkedin: "",
      github: "",
      interest: "",
      currentCompany: "",
      currentRole: "",
      disciplines: [],
      // newsletter: false,
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    startTransition(async () => {
      await introductionFormAction(data);

      alert(
        "Thank you for reaching out! Your message has been successfully submitted. We will get back to you as soon as possible.",
      );
      form.reset();
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

        <FormField
          control={form.control}
          name="skills"
          render={() => (
            <FormItem>
              <FormLabel>Skills (Optional)</FormLabel>
              <FormDescription>Select all that apply</FormDescription>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <FormField
                    key={skill}
                    control={form.control}
                    name="skills"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={skill}
                          className="flex flex-row items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(skill)}
                              onCheckedChange={(checked) => {
                                return checked && field.value
                                  ? field.onChange([...field.value, skill])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== skill,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">{skill}</FormLabel>
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
          name="github"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GitHub (Optional)</FormLabel>
              <FormControl>
                <div className="flex">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 px-3 font-mono text-xs">
                    github.com/
                  </span>
                  <Input className="rounded-l-none" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="linkedin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>LinkedIn (Optional)</FormLabel>
              <FormControl>
                <div className="flex">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 px-3 font-mono text-xs">
                    linkedin.com/in/
                  </span>
                  <Input className="rounded-l-none" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What are you most interested in? (Optional)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {interestOptions.map((option) => (
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
          name="currentCompany"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Company (Optional)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="currentRole"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Role (Optional)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="disciplines"
          render={() => (
            <FormItem>
              <FormLabel>
                What disciplines are you interested in (Optional)
              </FormLabel>
              <FormDescription>Select all that apply</FormDescription>
              <div className="grid grid-cols-2 gap-2">
                {disciplines.map((discipline) => (
                  <FormField
                    key={discipline}
                    control={form.control}
                    name="disciplines"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={discipline}
                          className="flex flex-row items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(discipline)}
                              onCheckedChange={(checked) => {
                                return checked && field.value
                                  ? field.onChange([...field.value, discipline])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== discipline,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {discipline}
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

        <Button type="submit" disabled={isPending} className="w-full md:w-36">
          Submit
        </Button>
      </form>
    </Form>
  );
}
