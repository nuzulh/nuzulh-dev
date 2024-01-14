import { Footer } from "./footer";
import { Header } from "./header";

export function PageContainer({
  hideHeader = false,
  hideFooter = false,
  children,
}: {
  hideHeader?: boolean;
  hideFooter?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-between">
      {!hideHeader && <Header />}
      {children}
      {!hideFooter && <Footer />}
    </div>
  );
}
