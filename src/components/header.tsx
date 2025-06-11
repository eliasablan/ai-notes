import Link from "next/link";
import { ThemeDropdown } from "./theme-dropdown";
import { Notebook } from "lucide-react";
import { Button } from "./ui/button";
import { getUser } from "@/auth/server";
import LogoutButton from "@/components/logout-button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default async function Header() {
  const user = await getUser();

  return (
    <header className="bg-secondary relative flex h-16 w-full items-center justify-between px-4 xl:px-8">
      <SidebarTrigger />
      <Link
        href="/"
        className="hover:text-muted-foreground flex items-end gap-2 duration-500"
      >
        <Notebook className="size-8" />
        <h1 className="text-md flex flex-col leading-none font-semibold">
          AI <span>Notes</span>
        </h1>
      </Link>
      <div className="flex items-center gap-2">
        {user ? (
          <LogoutButton />
        ) : (
          <>
            <Button asChild>
              <Link href="/ingresar">Sign In</Link>
            </Button>
            <Button variant="outline" className="hidden md:block" asChild>
              <Link href="/registrar">Register</Link>
            </Button>
          </>
        )}
        <ThemeDropdown />
      </div>
    </header>
  );
}
