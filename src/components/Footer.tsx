import { Button } from './ui/button'
import { Link } from '@tanstack/react-router'

export const Footer = () => {
	const links = [
		{ name: 'Home', url: '/' },
		{ name: 'Pricing', url: '/pricing' },
		{ name: 'Contact', url: '/contact' },
		{ name: 'FAQ', url: '/faq' },
	]
	return (
		<footer className='flex flex-col justify-between gap-6 p-6 text-center opacity-50 md:flex-row'>
			<nav>
				<ul className='flex flex-col gap-3 md:flex-row'>
					{links.map((link) => (
						<li key={link.name}>
							<Button
								variant='link'
								className='text-foreground'
								size='inline'
								asChild
							>
								<Link to={link.url}>{link.name}</Link>
							</Button>
						</li>
					))}
				</ul>
			</nav>
			<span>
				Copyright © 2024–{new Date().getFullYear()} Danny Harris
			</span>
		</footer>
	)
}
