"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { logoutAction } from "@/actions/users";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);

    const { errorMessage } = await logoutAction();

    if (errorMessage) {
      toast.error(errorMessage);
    } else {
      toast.success("Logged out");
      router.push("/");
    }

    setIsLoading(false);
  };

  return (
    <Button variant="outline" onClick={handleLogout} disabled={isLoading}>
      Logout
    </Button>
  );
}
