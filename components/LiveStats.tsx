"use client";

import { useEffect, useState } from "react";

type Stats = {
  price: string;
  holders: string;
  marketCap: string;
  liquidity: string;
};

export default function LiveStats() {
  const [stats, setStats] = useState<Stats>({
    price: "...",
    holders: "...",
    marketCap: "...",
    liquidity: "...",
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch("/api/token");
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadStats();

    const interval = setInterval(loadStats, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-green-400 mb-12">
          Live Statistics
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-gray-900 border border-green-500 rounded-xl p-6 text-center">
            <h3 className="text-green-400 text-lg">Price</h3>
            <p className="text-3xl font-bold mt-4">
              {stats.price}
            </p>
          </div>

          <div className="bg-gray-900 border border-green-500 rounded-xl p-6 text-center">
            <h3 className="text-green-400 text-lg">Holders</h3>
            <p className="text-3xl font-bold mt-4">
              {stats.holders}
            </p>
          </div>

          <div className="bg-gray-900 border border-green-500 rounded-xl p-6 text-center">
            <h3 className="text-green-400 text-lg">Market Cap</h3>
            <p className="text-3xl font-bold mt-4">
              {stats.marketCap}
            </p>
          </div>

          <div className="bg-gray-900 border border-green-500 rounded-xl p-6 text-center">
            <h3 className="text-green-400 text-lg">Liquidity</h3>
            <p className="text-3xl font-bold mt-4">
              {stats.liquidity}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}