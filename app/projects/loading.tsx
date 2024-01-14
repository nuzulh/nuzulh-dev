import { PageContainer } from "@/components/container";
import { Loader2 } from "lucide-react";

export default function ProjectsLoading() {
  return (
    <PageContainer>
      <Loader2 size={36} className="animate-spin" />
    </PageContainer>
  );
}
