'use client';
import Link from 'next/link';
import { useState } from 'react';
import '../../styles/utils/tooltip_style.css';
import '../../styles/header/navigation_style.css';
import Tooltip from '../utils/Tooltip';

function Navigation() {
	const [lang, setLang] = useState('fr');

	return (
		<nav>
			<ul>
				<li>
					<Link href='/community'>Communauté</Link>
				</li>
				<li>
					<Link href='/kpop'>kpop</Link>
				</li>
				<li>
					<a href='#about-me'>About Me</a>
				</li>

				<Tooltip text={'Non implémenté / Not implemented yet'}>
					{lang === 'en' && (
						<button onClick={() => setLang('fr')} className='lang_btn'>
							FR
						</button>
					)}
					{lang === 'fr' && (
						<button onClick={() => setLang('en')} className='lang_btn'>
							EN
						</button>
					)}
				</Tooltip>
			</ul>
		</nav>
	);
}

export default Navigation;
