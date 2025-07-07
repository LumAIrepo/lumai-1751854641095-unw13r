
import "./globals.css";
import { WalletProvider } from "@/lib/wallet/context";
require("@solana/wallet-adapter-react-ui/styles.css");

export const metadata = {
  title: "My Solana DApp for: can u make a pumpfun...",
  description: "A fully functional Solana dApp based on the prompt: "can u make a pumpfun clone"",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}
        