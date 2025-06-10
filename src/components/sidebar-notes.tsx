"use client";

import React from "react";
import { Note } from "@prisma/client";

type Props = {
  notes: Note[];
};

export default function SidebarNotes({ notes }: Props) {
  console.log({ notes });
  return <p>Tus notas</p>;
}
