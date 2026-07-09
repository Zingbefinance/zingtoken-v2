"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const WalletMultiButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui").then(
      (mod) => mod.WalletMultiButton
    ),
  {
    ssr: false,
  }
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
   <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-lg border-b border-green-500">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">

    {/* Logo */}
    <a href="#home" className="flex items-center gap-3">
      <Image
        src="/images/logo.png"
        alt="ZING TOKEN"
        width={45}
        height={45}
        className="rounded-full"
      />

      <span className="text-2xl md:text-3xl font-extrabold text-green-400">
        ZING TOKEN
      </span>
    </a>
    {/* Menu Desktop */}
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
    <a href="#buy" className="hover:text-green-400 transition">
      Buy
    </a>
  </li>

  
</ul>
 <div className="flex items-center gap-4">

  {/* Wallet */}
  <div className="wallet-button hidden md:block">
    <WalletMultiButton />
  </div>

  {/* Menu Hamburger */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="lg:hidden text-green-400 text-3xl"
    aria-label="Open menu"
  >
    ☰
  </button>

</div>

</div>
{/* Menu Mobile */}
{menuOpen && (
  <div className="lg:hidden bg-black border-t border-green-500">

    <a
      href="#home"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 text-white hover:bg-green-500 hover:text-black"
    >
      Home
    </a>

    <a
      href="#about"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 text-white hover:bg-green-500 hover:text-black"
    >
      About
    </a>

    <a
      href="#tokenomics"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 text-white hover:bg-green-500 hover:text-black"
    >
      Tokenomics
    </a>

    <a
      href="#roadmap"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 text-white hover:bg-green-500 hover:text-black"
    >
      Roadmap
    </a>

    <a
      href="#buy"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-4 text-white hover:bg-green-500 hover:text-black"
    >
      Buy
    </a>

    <div className="p-4">
      <WalletMultiButton />
    </div>

  </div>
)}

</nav>
  );
}