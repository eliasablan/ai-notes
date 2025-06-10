"use client";

import React, { useState } from "react";
import { User } from "@supabase/supabase-js";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import { createNoteAction } from "@/actions/notes";

type Props = {
  user: User | null;
};

export default function NewNoteButton({ user }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateNote = async () => {
    if (!user) {
      router.push("/ingresar");
    } else {
      setIsLoading(true);

      const uuid = uuidv4();
      await createNoteAction(uuid);
      router.push(`/?noteId=${uuid}`);

      toast.success("Note created");
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCreateNote}
      variant="secondary"
      className="w-24"
      disabled={isLoading}
    >
      {isLoading ? <Loader2 className="animate-spin" /> : "New Note"}
    </Button>
  );
}
