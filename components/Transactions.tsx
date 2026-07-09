"use client";

export default function Transactions() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-green-400 mb-12">
          Latest Transactions
        </h2>

        <iframe
          src="https://dexscreener.com/solana/2nqakcvvk4pbxrhzn9v4lg1cuhzbpyl1reowhpvjzuhn?embed=1&theme=dark"
          width="100%"
          height="650"
          style={{
            border: "0",
            borderRadius: "20px",
          }}
        />

      </div>
    </section>
  );
}