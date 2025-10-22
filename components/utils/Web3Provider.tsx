"use client"

import { WagmiConfig, createConfig,configureChains } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";
import { mainnet, polygon, optimism, arbitrum, bscTestnet,hardhat, localhost } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import MyCustomAvatar from "./MyCustomAvatar";
import { defineChain } from "viem";
// import { alchemyProvider } from 'wagmi/providers/alchemy'
// import { publicProvider } from 'wagmi/providers/public'
// import { InjectedConnector } from 'wagmi/connectors/injected'

// const { chains, publicClient } = configureChains(
// [bsc, bscTestnet,hardhat],
// [alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), publicProvider()],
// )

export const bsc = defineChain({
	id: 56,
	name: 'BNB Smart Chain',
	nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
	rpcUrls: {
		default: { http: ['https://bsc-dataseed1.bnbchain.org'] },
		public: { http: ['https://bsc-dataseed1.bnbchain.org'] },
	},
	blockExplorers: {
		default: { name: 'BscScan', url: 'https://bscscan.com' },
	},
	contracts: {
		
		multicall3: {
			address: '0xca11bde05977b3631167028862be2a173976ca11',
			blockCreated: 15921452,
		},
	},
	network: "bsc"
})

const { chains, publicClient } = configureChains(
	[bsc],
	[publicProvider()],
  )
const config = createConfig(
	getDefaultConfig({
	  // Required API Keys
	  alchemyId: "", // or infuraId
	  walletConnectProjectId: "c34123e69c0adae437ab17863ac97224",//process.env.WALLETCONNECT_PROJECT_ID,
	  autoConnect:true,
	  chains,
	  publicClient,
	  // Required
	  appName: "TCP",
  
	  // Optional
	  appDescription: "Your App Description",
	  
	  appUrl: "https://tcpgolbal.github.io/", // your app's url
	  appIcon: "https://tcpgolbal.github.io/icon.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
	}),
  );

const Web3Provider = ({
	children,
  }: {
	children: React.ReactNode
  }) => {
	
	return (
		<WagmiConfig config={config}>
			<ConnectKitProvider mode="auto" 
				theme="rounded"

				options={{
					language: "zh-CN",
					customAvatar: MyCustomAvatar,
				}}>
				{children}
			</ConnectKitProvider>
		</WagmiConfig>
	)
}

export default Web3Provider
