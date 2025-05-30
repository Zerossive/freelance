import { NavButton } from './NavButton'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

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
					<motion.img
						src='/favicon.svg'
						className='h-6 w-auto'
						initial={{ rotate: -10, scale: 1 }}
						animate={{ rotate: 10, scale: 1.1 }}
						transition={{
							repeat: Infinity,
							repeatType: 'reverse',
							// repeatDelay: 0.5,
							ease: 'easeInOut',
							duration: 2,
						}}
					/>
				</Button>
				<Button
					className='hidden text-foreground md:inline-block'
					variant='link'
					size='inline'
					to='/'
				>
					freelance web dev
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
