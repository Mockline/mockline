"use client";

import "./globals.css";
import {ReactNode} from "react";
import {App} from "@mockline/react";

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <App>
          {children}
        </App>
      </body>
    </html>
  );
}
