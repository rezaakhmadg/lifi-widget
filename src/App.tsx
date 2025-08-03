import { LiFiWidget } from '@lifi/widget';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
 
export function App() {
  const wallets = [new PhantomWalletAdapter()];
 
  return (
    <ConnectionProvider endpoint={clusterApiUrl('mainnet-beta')}>
      <WalletProvider wallets={wallets} autoConnect>
        <LiFiWidget
          integrator="Liminal-Stables"
          config={{
            appearance: 'dark',
            chains: 'all',
            solana: {
              enabled: true,
            },
            theme: {
              container: {
                border: '1px solid rgb(234, 234, 234)',
                borderRadius: '16px',
              },
            },
          }}
        />
      </WalletProvider>
    </ConnectionProvider>
  );
}