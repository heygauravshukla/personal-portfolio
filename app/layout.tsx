import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Gaurav Shukla - Front-end developer and accessibility advocate",
  description:
    "I'm Gaurav, a front-end developer and accessibility advocate based in India. I build modern, inclusive web experiences with React and Next.js, ensuring digital products are usable by everyone regardless of ability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>
            {children}
            <CTASection />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
