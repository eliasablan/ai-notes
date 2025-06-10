"use client";

import React from "react";
import { User } from "@supabase/supabase-js";

type Props = {
  user: User | null;
};

export default function AskAIButton({ user }: Props) {
  console.log({ user });

  return <div>AskAIButton</div>;
}
