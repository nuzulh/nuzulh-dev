import { ModeToggle } from "./mode-toggle";
import { Navbar } from "./navbar";

export function Header() {
  return (
    <header className="w-full p-3 flex items-center justify-between border-b">
      <Navbar />
      <ModeToggle />
    </header>
  );
}
