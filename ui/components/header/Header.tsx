'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Navigation from './Navigation';
import '../../styles/header/header_style.css';

function Header() {
	return (
		<header>
			{/* The head of the header */}
			<div className='top_header'>
				<Link href='/' className='title'>
					<img src='/pictures/header/logo.png' className='title__logo' />
				</Link>
				<Navigation />
			</div>

			<div className='bottom_header'>
				<h1>A little braver ✵</h1>
				<div className='socials'>
					<button className='socials__btn'>DISCORD</button>
					<button className='socials__btn'>INSTAGRAM</button>
					<button className='socials__btn'>TWITCH</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
