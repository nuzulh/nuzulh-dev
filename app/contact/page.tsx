import { PageContainer } from "@/components/container";
import { ContactForm } from "@/components/forms/contact.form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Nuzul H."
};

export default function ContactPage() {
  return (
    <PageContainer>
      <main className="grow p-4 w-full flex flex-col items-center justify-center gap-4">
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
