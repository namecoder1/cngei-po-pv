import Link from 'next/link'
import React from 'react'

const Navbar = () => {
	return (
		<nav className='flex items-center justify-between px-10 py-2 bg-green-400'>
			<h1 className='text-2xl font-semibold'><Link href='/'>CNGEI</Link></h1>
			<ul className='flex items-center justify-center gap-4'>
				<li>
					<Link href='/progressione-orizzontale'>PO</Link>
				</li>
				<li>
					<Link href='/progressione-verticale'>PV</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar