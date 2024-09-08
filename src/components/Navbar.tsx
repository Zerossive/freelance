import { NavButton } from './NavButton'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

export const Navbar = () => {
	return (
		<header className='sticky top-0 z-30 flex flex-wrap items-center justify-between gap-6 bg-background/90 p-6 backdrop-blur'>
			<div className='flex items-center gap-6'>
				<Button
					variant='link'
					size='inline'
					onClick={() =>
						window.scrollTo({ top: 0, behavior: 'smooth' })
					}
				>
					<img src='/vite.svg' className='h-6 w-auto' />
				</Button>
				<Button
					className='text-foreground'
					variant='link'
					size='inline'
					asChild
				>
					<Link to='/' className='hidden md:inline-block'>
						freelance web dev
					</Link>
				</Button>
			</div>
			<nav>
				<ul className='flex flex-wrap gap-6'>
					<li>
						<NavButton link='/'>home</NavButton>
					</li>
					<li>
						<NavButton link='/pricing'>pricing</NavButton>
					</li>
					<li>
						<NavButton link='/contact'>contact</NavButton>
					</li>
				</ul>
			</nav>
		</header>
	)
}
