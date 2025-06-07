import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Play Verse",
  description: "2D Metaverse Playground"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        layout: {
      unsafe_disableDevelopmentModeWarnings: true,
    },

      }}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
          {children}
          <div className="fixed top-4 left-4 z-50">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
