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
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col antialiased">
        {/* No-flash: theme ko paint se pehle hi set kar do */}
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// localStorage / system preference se theme turant lagata hai (FOUC se bachne ke liye)
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark');}}catch(e){}})();`;
