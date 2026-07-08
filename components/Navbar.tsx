"use client";

import dynamic from "next/dynamic";

const WalletMultiButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui").then(
      (mod) => mod.WalletMultiButton
    ),
  { ssr: false }
);

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-3xl font-extrabold text-green-400 tracking-wide">
          ZING TOKEN
        </h1>

        <ul className="hidden lg:flex items-center gap-8 text-gray-300 font-medium">
          <li>
            <a href="#home" className="hover:text-green-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-green-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#tokenomics" className="hover:text-green-400 transition">
              Tokenomics
            </a>
          </li>

          <li>
            <a href="#roadmap" className="hover:text-green-400 transition">
              Roadmap
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-green-400 transition">
              Contact
            </a>
          </li>
        </ul>

        <WalletMultiButton />
      </div>
    </nav>
  );
}