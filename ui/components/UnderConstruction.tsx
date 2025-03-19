'use client';

import { usePathname } from 'next/navigation';

function UnderConstruction() {
	const pathname = usePathname();

	if (pathname === '/community') {
		return null;
	}

	return (
		<div style={{ margin: '150px auto' }}>
			<p>
				<b>[FR]</b> Site en construction, merci d'être patient.
			</p>
			<p>
				<b>[EN]</b> Website under construction, please be patient.
			</p>

			<div className='heart'></div>
			<p
				style={{
					textAlign: 'center',
					marginTop: '110px',
					fontStyle: 'italic',
				}}>
				C'est du CSS
			</p>
		</div>
	);
}

export default UnderConstruction;
