import { PageContainer } from "@/components/container";
import { ContactForm } from "@/components/forms/contact.form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | Nuzul H."
};

export default function ContactPage() {
  return (
    <PageContainer>
      <main className="grow p-4 w-full flex flex-col-reverse lg:flex-row items-center justify-evenly">
        <Image
          src="/images/contact.svg"
          width={400}
          height={400}
          className="w-64 h-64 lg:w-96 lg:h-96"
          alt="contact"
          priority
        />
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Contact me</CardTitle>
            <CardDescription>
              Please do not hesitate to send me a message on any topic, I will respond as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </main>
    </PageContainer>
  );
}
