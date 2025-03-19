'use client'; // Important pour spécifier un composant côté client dans Next.js 13

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Breadcrumbs = () => {
	const pathname = usePathname(); // Récupère le chemin actuel
	const pathnames = pathname.split('/').filter(Boolean); // Découpe le chemin en segments

	return (
		<div
			className='breadcrumbs'
			style={{ marginLeft: '15px', marginTop: '15px', display: 'flex' }}>
			{pathnames.length === 0 ? (
				<p style={{ fontWeight: pathnames.length === 0 ? 'bold' : '' }}>
					▶ HOME
				</p>
			) : (
				<Link
					href='/'
					style={{
						color: 'black',
						marginRight: '15px',
					}}>
					▶ HOME
				</Link>
			)}

			{pathnames.map((path, index) => (
				<div key={index}>
					<span
						style={{
							cursor: index !== pathnames.length - 1 ? 'pointer' : 'default',
							fontWeight: index === pathnames.length - 1 ? 'bold' : 'normal',
							textTransform: 'uppercase',
							marginRight: '15px',
						}}>
						{index !== pathnames.length - 1 ? (
							<Link href={`/${pathnames.slice(0, index + 1).join('/')}`}>
								▶ {path}
							</Link>
						) : (
							`▶ ${path}`
						)}
					</span>
				</div>
			))}
		</div>
	);
};

export default Breadcrumbs;
