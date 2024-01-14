import { PageContainer } from "@/components/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Code, Code2, Download, FolderOpen, Github, Linkedin, Loader2 } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <PageContainer>
      <main className="grow p-4 flex flex-col items-center justify-center gap-4 lg:px-64">
        <Avatar className="w-52 md:w-64 h-52 md:h-64">
          <AvatarImage src={process.env.NEXT_PUBLIC_AVATAR_URL} alt="@nuzulh" />
          <AvatarFallback>NH</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl font-extrabold pt-4">
          Nuzul H
          <span className="text-4xl text-primary font-black">.</span>
        </h1>
        <h2 className="text-lg font-semibold flex items-center gap-2 font-mono">
          <Code className="text-primary" />
          Frontend Developer
          <Code2 className="text-primary" />
        </h2>
        <p className="text-sm text-muted-foreground text-center font-mono mb-3">
          Experienced Frontend Developer with over 3 years of hands-on expertise in designing and
          implementing innovative web applications. Proficient in front-end technologies, including HTML,
          CSS, JavaScript, TypeScript, and various modern frameworks. Adept at collaborating with
          cross-functional teams to drive project success and deliver exceptional user experiences.
          Strong problem-solving skills and a commitment to staying current with emerging trends in web
          development.
        </p>
        <Link href={process.env.NEXT_PUBLIC_FOLDER_URL!} target="_blank">
          <Button>
            <FolderOpen size={18} className="mr-2" /> My Documents
          </Button>
        </Link>
        <div className="flex gap-4 border-r border-l px-4 py-2 mt-4">
          <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL!} target="_blank">
            <Linkedin />
          </Link>
          <Link href={process.env.NEXT_PUBLIC_GITHUB_URL!} target="_blank">
            <Github />
          </Link>
        </div>
      </main>
    </PageContainer>
  );
}
