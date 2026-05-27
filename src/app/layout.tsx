import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { COMPANY } from "@/lib/constants";

// Body font — clean aur readable
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Heading/display font — thoda character ke saath
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.shortName} — Landscaping & Gardening Services`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description: COMPANY.description,
  keywords: [
    "landscaping",
    "gardening",
    "terrace gardening",
    "park development",
    "pond design",
    "Agro Greenvibe",
    "Rudrapur landscaping",
    "Uttarakhand landscaping",
  ],
  icons: { icon: "/logo/logo.png" },
  openGraph: {
    title: `${COMPANY.shortName} — Landscaping & Gardening Services`,
    description: COMPANY.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
