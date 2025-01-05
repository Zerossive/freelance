import { Button } from './ui/button'
import { Link } from '@tanstack/react-router'
import logoWhite from '@/assets/fwd-icon-white.svg'

export const Footer = () => {
	const links = [
		{ name: 'Home', url: '/' },
		{ name: 'Pricing', url: '/pricing' },
		{ name: 'Contact', url: '/contact' },
		{ name: 'FAQ', url: '/faq' },
	]
	return (
		<footer className='*:flex-1 flex flex-col flex-wrap items-center justify-between gap-6 p-6 text-center opacity-50 md:flex-row'>
			<div className='flex flex-wrap items-center justify-center gap-3'>
				<img
					src={logoWhite}
					alt='logo'
					className='h-6 w-auto'
					loading='lazy'
				/>
				<span>Freelance Web Dev</span>
			</div>
			<nav>
				<ul className='flex flex-col justify-center gap-3 md:flex-row'>
					{links.map((link) => (
						<li key={link.name}>
							<Button
								variant='link'
								className='text-foreground'
								size='inline'
								to={link.url}
							>
								{link.name}
							</Button>
						</li>
					))}
				</ul>
			</nav>
			<span className='text-center'>
				Copyright © 2024–{new Date().getFullYear()} Danny Harris
			</span>
		</footer>
	)
}
