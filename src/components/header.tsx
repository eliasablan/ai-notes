import Link from "next/link";
import { ThemeDropdown } from "./theme-dropdown";
import { Notebook } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-popover relative flex h-24 w-full items-center justify-between px-4 xl:px-8">
      <Link
        href="/"
        className="hover:text-muted-foreground flex items-center gap-2 duration-500"
      >
        <Notebook className="size-8" />
        <span className="text-2xl font-bold">Goat Notes</span>
      </Link>
      <div className="flex items-center gap-4">
        <ThemeDropdown />
      </div>
    </header>
  );
}
