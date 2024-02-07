'use client' // client side component
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
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Footer from "./components/Footer";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";

const Background = lazy(() => import('../app/components/Background'));
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Header />
        </header>
        <main className="font-sans">
            <Suspense fallback={<div><Loading /></div>}>
              <Background />
            </Suspense>
            <DndProvider backend={HTML5Backend}>
              { children }
            </DndProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}