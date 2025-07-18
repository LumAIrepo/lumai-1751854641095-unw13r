
"use client";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

export default function HomePage() {
  const { publicKey } = useWallet();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">My Solana DApp for: can u make a pumpfun...</h1>
      <p className="mb-8">A fully functional Solana dApp based on the prompt: "can u make a pumpfun clone"</p>
      <WalletMultiButton />
      {publicKey && <p className="mt-4">Your wallet: {publicKey.toBase58()}</p>}
    </main>
  );
}
        