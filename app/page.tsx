import { PageContainer } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Code, Code2, FolderOpen, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <PageContainer>
      <main className="grow p-4 flex flex-col items-center justify-center gap-4 lg:px-64">
        <Image
          src="/images/coding.svg"
          width={400}
          height={400}
          className="w-64 h-64 lg:w-96 lg:h-96 -my-16"
          alt="coding"
          priority
        />
        <div className="flex items-center gap-3 pt-4">
          <Image
            src="/logo.png"
            width={48}
            height={48}
            alt="logo"
          />
          <h1 className="text-3xl font-extrabold ">
            Nuzul H
            <span className="text-4xl text-primary font-black">.</span>
          </h1>
        </div>
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
