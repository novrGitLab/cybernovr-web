"use client";

import React from "react";
import { FormspreeProvider } from "@formspree/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <FormspreeProvider
      project={
        process.env.NEXT_PUBLIC_FORMSPREE_PROJECT_ID || "3041192141486292532"
      }
    >
      {children}
    </FormspreeProvider>
  );
}
