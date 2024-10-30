import { cookieStorage, createStorage, http } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { Chain } from "@reown/appkit/networks";

// Get projectId from https://cloud.reown.com
export const projectId = "dd57419b0220544787a9ddc9918038be";

if (!projectId) {
  throw new Error("Project ID is not defined");
}

const mande = {
  id: 18071918,
  name: "Mande",
  nativeCurrency: { name: "Mande", symbol: "MANDE", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://mande-mainnet.public.blastapi.io"] },
  },
} as const satisfies Chain;

export const networks = [mande];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
