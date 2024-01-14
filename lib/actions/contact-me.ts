"use server";

import { ContactSchema } from "@/components/forms/contact.form";
import nodemailer, { SendMailOptions } from "nodemailer";

export async function contactMe(payload: ContactSchema) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_FROM,
        pass: process.env.NODEMAILER_KEY,
      },
    });

    const mailOptions: SendMailOptions = {
      from: process.env.NODEMAILER_FROM,
      to: process.env.NODEMAILER_TO,
      subject: payload.subject,
      text: `Nama: ${payload.name}\nEmail dari: ${payload.email}\nNo. HP: ${payload.phone || "-"}\n\n${payload.message}`,
    };

    const result = await transporter.sendMail(mailOptions);

    if (result.accepted.length > 0) return {
      error: false,
      message: "Pesan berhasil dikirim, kami akan membalasnya segera. Terima kasih!",
      data: result,
    };

    return {
      error: true,
      message: "Ada yang salah",
    };

  } catch (error: any) {
    console.error(error);

    return {
      error: true,
      message: "Unknown error",
    };
  }
}
