"use client";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";

export default function Stats() {
  const [price, setPrice] = useState("0");
  const [marketCap, setMarketCap] = useState("0");
  const [liquidity, setLiquidity] = useState("0");
  const [volume, setVolume] = useState("0");
  const [holders, setHolders] = useState("109+");
  function formatNumber(value: any) {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(Number(value));
}

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch(
          "https://api.dexscreener.com/latest/dex/pairs/solana/2nqAkCVVk4PBXRHZn9v4Lg1CUHzBpYL1REowHPvJzuHn"
        );

        const data = await res.json();
        const pair = data.pair;

        if (!pair) return;

        setPrice(pair.priceUsd || "0");
        setMarketCap(String(pair.marketCap || "0"));
        setLiquidity(String(pair.liquidity?.usd || "0"));
        setVolume(String(pair.volume?.h24 || "0"));
        setHolders("109+");

      } catch (err) {
        console.error(err);
      }
    }

    loadStats();

    const interval = setInterval(loadStats, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="stats" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-green-400 text-center mb-12">
          Live Statistics
        </h2>

        <motion.div
  className="grid md:grid-cols-3 gap-8"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

          <div className="bg-gray-900 rounded-xl p-8 border border-green-500">
            <h3 className="text-gray-400">Price</h3>
            <p className="text-3xl font-bold">${price}</p>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 border border-green-500">
            <h3 className="text-gray-400">Market Cap</h3>
            <p className="text-3xl font-bold">
  ${formatNumber(marketCap)}
</p>
  </div>        

          <div className="bg-gray-900 rounded-xl p-8 border border-green-500">
            <h3 className="text-gray-400">Liquidity</h3>
           <p className="text-3xl font-bold">
  ${formatNumber(liquidity)}
</p> 
          </div>

          <div className="bg-gray-900 rounded-xl p-8 border border-green-500">
            <h3 className="text-gray-400">Volume 24H</h3>
          <p className="text-3xl font-bold">
  ${formatNumber(volume)}
</p>  
          </div>

          <div className="bg-gray-900 rounded-xl p-8 border border-green-500">
            <h3 className="text-gray-400">Holders</h3>
            <p className="text-3xl font-bold">{holders}</p>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 border border-green-500">
            <h3 className="text-gray-400">Circulating Supply</h3>
            <p className="text-3xl font-bold">
  {formatNumber(100000000)}
</p>
          </div>
         </motion.div> 

        </div>
      
    </section>
  );
}