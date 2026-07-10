"use client";

import AnnouncementBar from "@/components/AnnouncementBar";
import Transactions from "@/components/Transactions";
import LiveStats from "@/components/LiveStats";

import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
  <AnnouncementBar />
    
      <Navbar />
      

      <main className="bg-gray-900 text-white">
      <div className="min-h-screen flex flex-col items-center justify-center text-center">  
        <Image
  src="/images/logo.png"
  alt="ZING TOKEN Logo"
  width={180}
  height={180}
  className="mx-auto mb-6"
/>

          <h1 className="text-6xl font-bold text-green-400">
            ZING TOKEN
          </h1>

         <p className="mt-4 text-xl text-gray-300">
The Future of Web3 Finance on Solana
</p> 
 <a
 href="https://jup.ag/swap/SOL-4zihBzwHLx9z7aNmXam181iUd285xbqJNN57M5LhoHpu" 
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-8 px-8 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition"
>
  Buy ZING TOKEN
</a>
 <a
  href="https://acrobat.adobe.com/link/spaces/urn:aaid:sc:EU:014ca7a2-35c6-42c9-8af5-5cfe2cd4d5c7"
  target="_blank"
  className="mt-4 ml-4 inline-block px-8 py-3 border border-green-500 text-green-400 font-bold rounded-lg hover:bg-green-500 hover:text-black transition"
>
  Whitepaper
</a>      

        </div>
      </main><section className="bg-black text-white py-24 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-5xl font-bold text-green-400 mb-8">
      About ZING TOKEN
    </h2>

    <p className="text-xl text-gray-300 leading-9">
      ZING TOKEN is a next-generation decentralized cryptocurrency built on
      the Solana blockchain. Our mission is to make decentralized finance
      accessible, fast, secure and rewarding for everyone.

      <br /><br />

      ZING TOKEN is more than a cryptocurrency. It is the foundation of an
      ecosystem including DeFi services, AI solutions, Web3 applications,
      decentralized exchange (ZingSwap), payment solutions and future
      blockchain innovations.
    </p>
  </div>
</section>
<section id="tokenomics" className="bg-gray-900 text-white py-24 px-6">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-5xl font-bold text-green-400 mb-12">
      Tokenomics
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-black p-8 rounded-xl border border-green-500">
        <h3 className="text-2xl font-bold text-green-400">
          Total Supply
        </h3>
        <p className="text-3xl mt-4 font-bold">
          100,000,000
        </p>
        <p className="text-gray-400 mt-2">
          ZING TOKEN
        </p>
      </div>

      <div className="bg-black p-8 rounded-xl border border-green-500">
        <h3 className="text-2xl font-bold text-green-400">
          Community
        </h3>
        <p className="text-3xl mt-4 font-bold">
          40%
        </p>
      </div>

      <div className="bg-black p-8 rounded-xl border border-green-500">
        <h3 className="text-2xl font-bold text-green-400">
          Marketing
        </h3>
        <p className="text-3xl mt-4 font-bold">
          20%
        </p>
      </div>

      <div className="bg-black p-8 rounded-xl border border-green-500">
        <h3 className="text-2xl font-bold text-green-400">
          Liquidity
        </h3>
        <p className="text-3xl mt-4 font-bold">
          20%
        </p>
      </div>

      <div className="bg-black p-8 rounded-xl border border-green-500">
        <h3 className="text-2xl font-bold text-green-400">
          Team
        </h3>
        <p className="text-3xl mt-4 font-bold">
          10%
        </p>
      </div>

      <div className="bg-black p-8 rounded-xl border border-green-500">
        <h3 className="text-2xl font-bold text-green-400">
          Reserve
        </h3>
        <p className="text-3xl mt-4 font-bold">
          10%
        </p>
      </div>

    </div>

  </div>
</section>

<LiveStats />





<section id="roadmap" className="bg-black text-white py-24 px-6">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold text-green-400 text-center mb-16">
      Roadmap
    </h2>

    <div className="space-y-8">

      <div className="border-l-4 border-green-500 pl-8">
      


<h3 className="text-2xl font-bold text-green-400">
          Phase 1
        </h3>
        <p className="text-gray-300 mt-2">
          • Launch ZING TOKEN<br />
          • Website Release<br />
          • Community Growth<br />
          • CoinGecko & CoinMarketCap Listing
        </p>
      </div>

      <div className="border-l-4 border-green-500 pl-8">
        <h3 className="text-2xl font-bold text-green-400">
          Phase 2
        </h3>
        <p className="text-gray-300 mt-2">
          • ZingSwap Development<br />
          • Mobile Wallet<br />
          • Strategic Partnerships<br />
          • AI Ecosystem
        </p>
      </div>

      <div className="border-l-4 border-green-500 pl-8">
        <h3 className="text-2xl font-bold text-green-400">
          Phase 3
        </h3>
        <p className="text-gray-300 mt-2">
          • NFT Marketplace<br />
          • Staking Platform<br />
          • Global Expansion<br />
          • ZING Blockchain
        </p>
      </div>

    </div>

  </div>
</section>
<section className="bg-black text-white py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-5xl font-bold text-green-400 text-center mb-8">
      Live Chart
    </h2>

    <iframe
      src="https://dexscreener.com/solana/2nqakcvvk4pbxrhzn9v4lg1cuhzbpyl1reowhpvjzuhn?embed=1&theme=dark"
      width="100%"
      height="600"
      style={{ border: "0", borderRadius: "16px" }}
    />
    <div className="mt-8 flex justify-center">
  <a
    href="https://jup.ag/swap/SOL-4zihBzwHLx9z7aNmXam181iUd285xbqJNN57M5LhoHpu"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-xl text-xl transition"
  >
    🚀 Buy ZING TOKEN
  </a>
</div>

<div className="mt-4 flex justify-center">
  <a
    href="https://dexscreener.com/solana/2nqakcvvk4pbxrhzn9v4lg1cuhzbpyl1reowhpvjzuhn"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-400 hover:text-green-300 underline"
  >
    View on DexScreener
  </a>
</div>
  </div>
</section>
<section className="bg-black text-white py-20 px-6">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold text-green-400 text-center mb-12">
      Token Information
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-gray-900 border border-green-500 rounded-xl p-6">
        <h3 className="text-green-400 font-bold mb-2">Blockchain</h3>
        <p>Solana</p>
      </div>

      <div className="bg-gray-900 border border-green-500 rounded-xl p-6">
        <h3 className="text-green-400 font-bold mb-2">Token Symbol</h3>
        <p>ZTC</p>
      </div>

      <div className="bg-gray-900 border border-green-500 rounded-xl p-6">
        <h3 className="text-green-400 font-bold mb-2">Total Supply</h3>
        <p>100,000,000 ZTC</p>
      </div>

      <div className="bg-gray-900 border border-green-500 rounded-xl p-6">
        <h3 className="text-green-400 font-bold mb-2">Current Holders</h3>
        <p>109+</p>
      </div>

      <div className="bg-gray-900 border border-green-500 rounded-xl p-6">
        <h3 className="text-green-400 font-bold mb-2">Trading Pair</h3>
        <p>ZTC / SOL</p>
      </div>

      <div className="bg-gray-900 border border-green-500 rounded-xl p-6">
        <h3 className="text-green-400 font-bold mb-2">Liquidity</h3>
        <p>Locked ✅</p>
      </div>

    </div>

    <div className="mt-12 bg-gray-900 border border-green-500 rounded-xl p-6 text-center">

    <p
  className="break-all text-gray-300 bg-black p-3 rounded-lg cursor-pointer hover:bg-gray-800"
  onClick={() => {
    navigator.clipboard.writeText("4zihBzwHLx9z7aNmXam181iUd285xbqJNN57M5LhoHpu");
    alert("✅ Contract copied!");
  }}
>
  4zihBzwHLx9z7aNmXam181iUd285xbqJNN57M5LhoHpu
</p>

<button
  onClick={() => {
    navigator.clipboard.writeText("4zihBzwHLx9z7aNmXam181iUd285xbqJNN57M5LhoHpu");
    alert("✅ Contract copied!");
  }}
  className="mt-4 bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-xl transition"
>
  📋 Copy Contract Address
</button>  

    </div>

  </div>
</section>
<section id="about" className="bg-gray-900 text-white py-24 px-6">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold text-green-400 text-center mb-16">
      Why Choose ZING TOKEN?
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-black p-8 rounded-xl border border-green-500">
        <h3 className="text-2xl font-bold text-green-400 mb-4">
          ⚡ Fast Transactions
        </h3>

        <p className="text-gray-300">
          Powered by Solana for ultra-fast and low-cost transactions.
        </p>
      </div>

      <div className="bg-black p-8 rounded-xl border border-green-500">
        <h3 className="text-2xl font-bold text-green-400 mb-4">
          🔒 Secure
        </h3>

        <p className="text-gray-300">
          Built with modern blockchain security and transparency.
        </p>
      </div>

      <div className="bg-black p-8 rounded-xl border border-green-500">
        <h3 className="text-2xl font-bold text-green-400 mb-4">
          🚀 Future Ecosystem
        </h3>

        <p className="text-gray-300">
          ZingSwap, AI services, staking, NFT marketplace and more.
        </p>
      </div>

    </div>

  </div>
</section>
<footer className="bg-black border-t border-green-500 py-12 text-center">

  <h2 className="text-3xl font-bold text-green-400">
    ZING TOKEN
  </h2>

  <p className="text-gray-400 mt-4">
    The Future of Web3 Finance on Solana
  </p>

  <div className="flex justify-center gap-8 mt-8">

    <a href="#" className="text-green-400 hover:text-white">
      Telegram
    </a>

    <a href="#" className="text-green-400 hover:text-white">
      Twitter (X)
    </a>

    <a href="#" className="text-green-400 hover:text-white">
      GitHub
    </a>

    <a href="#" className="text-green-400 hover:text-white">
      Whitepaper
    </a>

  </div>

  <p className="text-gray-500 mt-8">
    © 2026 ZING TOKEN. All Rights Reserved.
  </p>
 <section id="home" className="bg-gray-900 text-white py-24 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-5xl font-bold text-green-400 mb-8">
      
    </h2>

    <div className="bg-black border border-green-500 rounded-xl p-6">
      <p className="text-gray-400 mb-4">
        Solana Contract Address
      </p>

      <p className="text-green-400 break-all text-lg font-mono">
        4zihBzwHLx9z7aNmXam181iUd285xbqJNN57M5LhoHpu
      </p>

      
    
    </div>
  </div>
</section>
<section id="contact" className="bg-black text-white py-24 px-6">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold text-center text-green-400 mb-16">
      
    </h2>

    <div className="grid md:grid-cols-4 gap-8">

      <div className="bg-gray-900 border border-green-500 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">👛</div>
        <h3 className="text-2xl font-bold mb-4">Step 1</h3>
        <p className="text-gray-300">
          Download and install the Phantom Wallet.
        </p>
      </div>

      <div className="bg-gray-900 border border-green-500 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">💰</div>
        <h3 className="text-2xl font-bold mb-4">Step 2</h3>
        <p className="text-gray-300">
          Buy SOL and send it to your Phantom Wallet.
        </p>
      </div>

      <div className="bg-gray-900 border border-green-500 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">🔄</div>
        <h3 className="text-2xl font-bold mb-4">Step 3</h3>
        <p className="text-gray-300">
          Visit Raydium and connect your wallet.
        </p>
      </div>

      <div className="bg-gray-900 border border-green-500 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">🚀</div>
        <h3 className="text-2xl font-bold mb-4">Step 4</h3>
        <p className="text-gray-300">
          Paste the ZING TOKEN contract address and swap SOL for ZING TOKEN.
        </p>
      </div>

    </div>

  </div>
</section>
<footer className="bg-black border-t border-green-500 py-12 text-cent"></footer>

  <h2 className="text-3xl font-bold text-green-400">
    ZING TOKEN
  </h2>

  <p className="text-gray-400 mt-3">
    The Future of Web3 Finance on Solana
  </p>

  <div className="flex flex-wrap justify-center gap-4 mt-10">

    <a
      href="https://acrobat.adobe.com/link/spaces/urn:aaid:sc:EU:014ca7a2-35c6-42c9-8af5-5cfe2cd4d5c7"
      target="_blank"
      className="border border-green-500 px-6 py-3 rounded-lg min-w-[220px] text-center hover:bg-green-500 hover:text-black transition"
    >
      📄 Whitepaper
    </a>

    <a
      href="https://t.me/Zingbefinanc"
      target="_blank"
     className="border border-green-500 px-6 py-3 rounded-lg min-w-[220px] text-center hover:bg-green-500 hover:text-black transition" 
    >
      📢 Telegram Channel
    </a>

    <a
      href="https://t.me/Zing_toke"
      target="_blank"
     className="border border-green-500 px-6 py-3 rounded-lg min-w-[220px] text-center hover:bg-green-500 hover:text-black transition" 
    >
      👥 Telegram Group
    </a>

    <a
      href="https://x.com/GogbeZingbe"
      target="_blank"
      className="border border-green-500 px-6 py-3 rounded-lg min-w-[220px] text-center hover:bg-green-500 hover:text-black transition"
    >
      🐦 X (Twitter)
    </a>

 <a
  href="https://youtube.com/@zingbefinance703?si=sgdpXhZm25XkXha-"
  target="_blank"
  className="border border-green-500 px-6 py-3 rounded-lg hover:bg-green-500 hover:text-black transition"
>
  ▶️ YouTube
</a> 
</div>

<p className="text-gray-500 mt-10">
  © 2026 ZING TOKEN. All Rights Reserved.
</p>
</footer>

    </>
  );
  }    
