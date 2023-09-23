import Sidebar from "@/components/sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className + " bg-gray-950 text-white"}>
        <Sidebar>
          {children}
        </Sidebar>
        {/* <main className="container m-auto h-[calc(100vh-4rem)] flex items-center justify-center">
          {children}
        </main> */}
      </body>
    </html>
  );
}
