import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/sections/Chatbot";
import JsonLd from "@/components/seo/JsonLd";
import InstallApp from "@/components/pwa/InstallApp";
import { COMPANY } from "@/lib/constants";
import { buildKeywords, GEO, SITE_URL } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";

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

const TITLE = `${COMPANY.shortName} — Landscaping & Gardening Services in Rudrapur & Haldwani`;
const DESCRIPTION =
  "Agro Greenvibe India Pvt. Ltd. — professional landscaping, gardening and green-space design in Rudrapur, Haldwani and across Uttarakhand. Terrace gardens, parks, ponds, kitchen gardens and year-round garden maintenance. Free site visit & quote.";

export const metadata: Metadata = {
  // metadataBase se saare relative URLs (OG image, canonical) absolute ban jaate
  // hain — iske bina Google ko adhoore URLs milte hain.
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${COMPANY.shortName} — Rudrapur & Haldwani`,
  },
  description: DESCRIPTION,
  keywords: buildKeywords(),
  applicationName: COMPANY.shortName,
  authors: [{ name: COMPANY.name, url: SITE_URL }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  category: "Landscaping & Gardening",
  alternates: { canonical: "/" },
  // PWA — manifest.ts se /manifest.webmanifest generate hota hai.
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: COMPANY.shortName,
    statusBarStyle: "black-translucent",
  },
  // icons yahan set nahi karte — Next.js khud favicon.ico, icon.png aur
  // apple-icon.png (src/app/ me rakhe hue) detect karke <link> tags bana deta hai.
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: COMPANY.shortName,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY.shortName} — landscaping and gardening services in Rudrapur, Uttarakhand`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Local/GEO signals — Google ko batate hain ki business physically kahan hai.
  other: {
    "geo.region": GEO.regionCode,
    "geo.placename": `${GEO.addressLocality}, ${GEO.addressRegion}`,
    "geo.position": `${GEO.latitude};${GEO.longitude}`,
    ICBM: `${GEO.latitude}, ${GEO.longitude}`,
  },
};

// themeColor Metadata me nahi, Viewport me jaata hai (Next.js 14+).
// Android par ye browser ki address bar aur installed app ka colour set karta hai.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#15803d" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1613" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col antialiased">
        {/* No-flash: theme ko paint se pehle hi set kar do */}
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        {/* Business + website structured data — har page par jaata hai. */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {/* Install banner Header se upar — page khulte hi sabse upar dikhta hai.
            Service worker registration bhi isi component ke andar hota hai. */}
        <InstallApp />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}

// localStorage / system preference se theme turant lagata hai (FOUC se bachne ke liye)
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark');}}catch(e){}})();`;
