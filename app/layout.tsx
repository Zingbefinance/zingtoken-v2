import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import WalletContextProvider from "../components/WalletContextProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ZING TOKEN | The Future of Web3 Finance on Solana",

  description:
    "ZING TOKEN is a next-generation cryptocurrency built on the Solana blockchain. Buy ZING TOKEN, explore ZingSwap, ZingBot Cloud and the future of decentralized finance.",

  keywords: [
    "ZING TOKEN",
    "ZING",
    "Solana",
    "Crypto",
    "Web3",
    "DeFi",
    "ZingSwap",
    "ZingBot Cloud",
    "Blockchain",
    "Buy ZING TOKEN",
  ],

  authors: [
    {
      name: "ZING TOKEN",
    },
  ],

  creator: "ZING TOKEN",

  publisher: "ZING TOKEN",

  metadataBase: new URL("https://zingtoken-v2.vercel.app"),

  openGraph: {
    title: "ZING TOKEN",
    description:
      "The Future of Web3 Finance on Solana",

    url: "https://zingtoken-v2.vercel.app",

    siteName: "ZING TOKEN",

    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ZING TOKEN",
    description:
      "The Future of Web3 Finance on Solana",

    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <WalletContextProvider>
          {children}
        </WalletContextProvider>
      </body>
    </html>
  );
}