"use client";

import React from "react";
import { User } from "@supabase/supabase-js";
import { Button } from "./ui/button";

type Props = {
  user: User | null;
};

export default function NewNoteButton({ user }: Props) {
  console.log({ user });

  return <Button>NewNoteButton</Button>;
}
