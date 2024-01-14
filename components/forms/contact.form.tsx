"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { useTransition } from "react";
import { toast } from "sonner";
import { ApiResponse } from "@/typings";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { contactMe } from "@/lib/actions/contact-me";

const contactSchema = z.object({
  name: z.string().min(1, "Nama tidak boleh kosong"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1, "Pesan tidak boleh kosong"),
});

export type ContactSchema = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, startTransition] = useTransition();
  const form = useForm<ContactSchema>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactSchema) {
    startTransition(
      async () => {
        const result = await contactMe(values) as ApiResponse<SMTPTransport.SentMessageInfo>;

        toast[result.error ? "error" : "success"](
          result.error ? "Aksi gagal!" : "Aksi berhasil!",
          { description: result.message },
        );

        form.reset();
      }
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-full max-w-sm">
        <FormField
          disabled={isSubmitting}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Masukkan nama Anda" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isSubmitting}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Masukkan email Anda" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isSubmitting}
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No. HP</FormLabel>
              <FormControl>
                <Input {...field} placeholder="(opsional) Masukkan no. hp Anda" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isSubmitting}
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Judul</FormLabel>
              <FormControl>
                <Input {...field} placeholder="(opsional) Masukkan masukkan judul pesan" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isSubmitting}
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pesan</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Tuliskan pesan Anda" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isSubmitting} className="mt-4 flex gap-2 w-full">
          <Send size={18} /> Kirim
        </Button>
      </form>
    </Form>
  );
}
