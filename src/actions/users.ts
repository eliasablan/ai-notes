"use server";

import { createClient } from "@/auth/server";
import { prisma } from "@/db/prisma";
import { handleError } from "@/lib/utils";

export async function loginAction(email: string, password: string) {
  try {
    const { auth } = await createClient();

    const { error } = await auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
}
export async function logoutAction() {
  try {
    const { auth } = await createClient();

    const { error } = await auth.signOut();

    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
}

export async function signupAction(email: string, password: string) {
  try {
    const { auth } = await createClient();

    const { error, data } = await auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    const userId = data?.user?.id;
    if (!userId) throw new Error("Sign Up Error");

    // Create user in database
    await prisma.user.create({
      data: { id: userId, email },
    });

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
}
