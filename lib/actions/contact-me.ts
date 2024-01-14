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
      text: `Name: ${payload.name}\nFrom: ${payload.email}\nPhone number: ${payload.phone || "-"}\n\n${payload.message}`,
    };

    const result = await transporter.sendMail(mailOptions);

    if (result.accepted.length > 0) return {
      error: false,
      message: "Your message has been sent. Please kindly wait for me to respond. Thank you!",
      data: result,
    };

    return {
      error: true,
      message: "Sorry, something wrong has happened...",
    };

  } catch (error) {
    console.error(error);

    return {
      error: true,
      message: "Sorry, something wrong has happened...",
    };
  }
}
