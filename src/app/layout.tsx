import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Custom/Navbar";
import { ThemeProvider } from "@/components/Theme-Provider";
import Footer from "@/components/Custom/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pitch Pal",
  description: "A collaborative pitch deck builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
        suppressContentEditableWarning={true}
      >
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <div className=" mx-auto ">
                <Navbar
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Features", href: "#features" },
                    { label: "FAQs", href: "#FAQs" },
                    { label: "Pricing", href: "#pricing" },
                    { label: "Contact", href: "#contact" },
                    { label: "Login", href: "/Login" },
                    { label: "Sign Up", href: "/Signup" },
                  ]}
                  activeHref="/"
                  className="custom-nav"
                  ease="power2.easeOut"
                  baseColor="#000000"
                  pillColor="#ffffff"
                  hoveredPillTextColor="#ffffff"
                  pillTextColor="#000000"
                />
              </div>
              {children}
              <Footer />
            </ThemeProvider>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
