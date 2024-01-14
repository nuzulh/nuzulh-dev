import { PageContainer } from "@/components/container";
import { ContactForm } from "@/components/forms/contact.form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <PageContainer>
      <main className="grow p-4 w-full flex flex-col items-center justify-center gap-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Hubungi saya</CardTitle>
            <CardDescription>
              Mari mulai berdiskusi terkait hal apa saja melalui formulir di bawah ini.
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
