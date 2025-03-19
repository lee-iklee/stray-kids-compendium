import type { Metadata } from 'next';
import '../ui/styles/globals.css';

import UnderConstruction from '../ui/components/UnderConstruction';

export const metadata: Metadata = {
	title: 'Stray Kids Compendium',
	description: 'A venir',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<div className='main_container'>
					<UnderConstruction />
					{children}

					<footer></footer>
				</div>
			</body>
		</html>
	);
}
