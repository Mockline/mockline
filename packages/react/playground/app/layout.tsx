"use client";

import "./globals.css";
import type { ReactNode } from "react";
import { App } from "../../src";

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <App children={children} />
      </body>
    </html>
  );
}
