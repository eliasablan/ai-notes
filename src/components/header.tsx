import Link from "next/link";
import { ThemeDropdown } from "./theme-dropdown";
import { Notebook } from "lucide-react";
import { Suspense } from "react";
import { Button } from "./ui/button";

export default function Header() {
  const user = null;
  return (
    <header className="bg-secondary relative flex h-20 w-full items-center justify-between px-4 xl:px-8">
      <Link
        href="/"
        className="hover:text-muted-foreground flex items-end gap-2 duration-500"
      >
        <Notebook className="size-9" />
        <h1 className="flex flex-col text-xl leading-none font-semibold">
          Goat <span>Notes</span>
        </h1>
      </Link>
      <div className="flex items-center gap-2">
        <Suspense fallback={<div>Cargando...</div>}>
          {user ? (
            <Button variant="outline">Logout</Button>
          ) : (
            <>
              <Button asChild>
                <Link href="/ingresar">Ingresa</Link>
              </Button>
              <Button variant="outline" className="hidden md:block" asChild>
                <Link href="/registrar">Regístrate</Link>
              </Button>
            </>
          )}
        </Suspense>
        <ThemeDropdown />
      </div>
    </header>
  );
}
