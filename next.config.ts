import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	async rewrites() {
		return [
			{
				source: '/', // L'URL que tu veux afficher dans le navigateur
				destination: '/pages', // Le dossier réel dans ton projet (pages/dossierX)
			},
		];
	},
};

export default nextConfig;
