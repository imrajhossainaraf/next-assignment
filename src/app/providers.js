"use client";

import { SessionProvider } from "next-auth/react";
import { TimelineProvider } from "../context/TimelineContext";

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <TimelineProvider>{children}</TimelineProvider>
    </SessionProvider>
  );
}
