// import Footer from "@/components/Footer/Footer"
// import Header from "@/components/Header/Header"
// import Navbar from "@/components/Navbar/Navbar"
// import ScrollToTop from "@/components/ScrolltoTop/ScrolltoTop"
// import BreakingNews from "@/components/Share/BreakingNews/BreakingNews"
// import type { Metadata, Viewport } from "next"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import type { ReactNode } from "react"

// Define default metadata for SEO
// export const metadata: Metadata = {
//   title: {
//     template: "%s | ডেইলি টাইমস ২৪",
//     default: "ডেইলি টাইমস ২৪ - বাংলাদেশের সর্বশেষ খবর",
//   },
//   description: "ডেইলি টাইমস ২৪ - জাতীয়, রাজনীতি, আর্ন্তজাতিক, খেলাধুলা, বিনোদন, তথ্য ও প্রযুক্তি, অর্থনীতি সহ সকল সর্বশেষ খবর",
//   keywords: [
//     "ডেইলি টাইমস ২৪",
//     "বাংলাদেশ খবর",
//     "জাতীয়",
//     "রাজনীতি",
//     "আর্ন্তজাতিক",
//     "খেলাধুলা",
//     "বিনোদন",
//     "তথ্য ও প্রযুক্তি",
//     "অর্থনীতি",
//     "বিবিধ",
//     "ভ্রমণ ও পর্যটন",
//     "লাইফ স্টাইল",
//     "ধর্ম ও ইসলাম",
//     "শিক্ষা",
//     "নারী",
//     "স্বাস্থ্য",
//     "চাকরি",
//   ],
//   authors: [{ name: "ডেইলি টাইমস ২৪", url: "https://dailytimes24.com" }],
//   creator: "ডেইলি টাইমস ২৪",
//   publisher: "ডেইলি টাইমস ২৪",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   metadataBase: new URL("https://dailytimes24.com"),
//   alternates: {
//     canonical: "/",
//     languages: {
//       "bn-BD": "/",
//       "en-US": "/en",
//     },
//   },
//   openGraph: {
//     title: "ডেইলি টাইমস ২৪ - বাংলাদেশের সর্বশেষ খবর",
//     description: "ডেইলি টাইমস ২৪ - জাতীয়, রাজনীতি, আর্ন্তজাতিক, খেলাধুলা, বিনোদন, তথ্য ও প্রযুক্তি, অর্থনীতি সহ সকল সর্বশেষ খবর",
//     url: "https://dailytimes24.com",
//     siteName: "ডেইলি টাইমস ২৪",
//     images: [
//       {
//         url: "https://dailytimes24.com/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "ডেইলি টাইমস ২৪",
//       },
//     ],
//     locale: "bn_BD",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "ডেইলি টাইমস ২৪",
//     description: "ডেইলি টাইমস ২৪ - জাতীয়, রাজনীতি, আর্ন্তজাতিক, খেলাধুলা, বিনোদন, তথ্য ও প্রযুক্তি, অর্থনীতি সহ সকল সর্বশেষ খবর",
//     images: ["https://dailytimes24.com/twitter-image.jpg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   verification: {
//     google: "your-google-verification-code",
//     yandex: "your-yandex-verification-code",
//   },
// }

// Define viewport settings
// export const viewport: Viewport = {
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "#ffffff" },
//     { media: "(prefers-color-scheme: dark)", color: "#000000" },
//   ],
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 5,
// }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="bn" dir="ltr">
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Hreflang tags for language/region targeting */}
        <link rel="alternate" hrefLang="bn-bd" href="https://dailytimes24.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://dailytimes24.com/" />
      </head>
      <body className="flex flex-col min-h-screen relative">
        <header className="z-30">
          <Header />
        </header>
        <nav className="sticky top-0 z-40" aria-label="মূল নেভিগেশন">
          {/* <Navbar /> */}
        </nav>
        <main className=" flex-grow mb-[50px]" id="main-content">
          {children}
        </main>
        <div
          className="hidden lg:flex fixed bottom-0 left-0 right-0 z-50"
          aria-label="ব্রেকিং নিউজ"
          role="complementary"
        >
          {/* <BreakingNews /> */}
        </div>
        <footer className="relative z-30" role="contentinfo">
          <Footer />
        </footer>
        {/* <ScrollToTop /> */}

        

       

        
      </body>
    </html>
  )
}

