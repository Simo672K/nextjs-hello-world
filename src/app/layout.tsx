import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import StoreProvider from "@/app/StoreProvide";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Healthy food",
  description: "Delivred healthy meals just for you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full" lang="en">
      <body className={cn(inter.className, "h-full")}>
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
