import { SessionProvider } from "next-auth/react";
import { BASE_PATH, auth } from "@/auth";

import AuthButtonClient from "./auth-button-client";
import { serverHooks } from "next/dist/server/app-render/entry-base";

export default async function AuthButtonServer() {
  const session = await auth();
  if (session && session.user) {
    session.user = {
      first_name: session.user.first_name,
      last_name: session.user.last_name,
      isAdmin: session.user.isAdmin,
      isActive: session.user.isActive,
      email: session.user.email,
    };
  }

  return (
    <SessionProvider basePath={BASE_PATH} session={session}>
      <AuthButtonClient />
    </SessionProvider>
  );
}