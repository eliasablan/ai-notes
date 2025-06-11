import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { getUser } from "@/auth/server";
import { Note } from "@prisma/client";
import { prisma } from "@/db/prisma";
import Link from "next/link";
import SidebarNotes from "./sidebar-notes";
import { Notebook } from "lucide-react";

async function AppSidebar() {
  const user = await getUser();

  let notes: Note[] = [];

  if (user) {
    notes = await prisma.note.findMany({
      where: {
        authorId: user.id,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/" className="flex items-center gap-2">
                <Notebook className="!size-5" />
                <span className="text-base font-semibold">Goat Notes</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="custom-scrollbar">
        <SidebarGroup>
          <SidebarGroupLabel className="text-md my-2">
            {user ? (
              "Mis notas"
            ) : (
              <p>
                <Link href="/ingresar" className="underline">
                  Inicia sesión
                </Link>{" "}
                para ver tus notas
              </p>
            )}
          </SidebarGroupLabel>
          {user && <SidebarNotes notes={notes} />}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
