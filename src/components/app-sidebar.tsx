import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getUser } from "@/auth/server";
import { Note } from "@prisma/client";
import { prisma } from "@/db/prisma";
import Link from "next/link";
import SidebarNotes from "./sidebar-notes";

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
    <Sidebar collapsible="icon">
      <SidebarHeader />
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
      <SidebarFooter className="flex w-full items-end">
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
