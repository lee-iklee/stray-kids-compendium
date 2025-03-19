import type { Metadata } from 'next';
import '../ui/styles/globals.css';

import Header from '../ui/components/header/Header';
import UnderConstruction from '../ui/components/UnderConstruction';
import Breadcrumbs from '../ui/components/BreadCrumbs';

export const metadata: Metadata = {
	title: "iklee's website",
	description: "Venez, y'a Lee Know & Bangchan",
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
					<Header />
					<Breadcrumbs />
					<UnderConstruction />
					{children}

					<footer></footer>
				</div>
			</body>
		</html>
	);
}
