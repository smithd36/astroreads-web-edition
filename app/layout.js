/**
 * @file app/layout.js
 * @module Layout
 * @description This file is the layout of the AstroReads application.
 * @requires next/font/google
 * @requires ./globals.css
 * 
 * @param { * } children
 * @returns { * } JSX
 * 
 * @author Drey Smith
 * @date 2024-02-02
 */

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AstroReads - Home",
  description: "AstroReads is a personal book recommender, free library and e-reader.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
