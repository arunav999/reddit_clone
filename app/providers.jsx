"use client";

import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";

import client from "@/apollo-client";

export default function Providers({ children }) {
  return (
    <>
      <ApolloProvider client={client}>
        <SessionProvider>{children}</SessionProvider>
      </ApolloProvider>
    </>
  );
}
