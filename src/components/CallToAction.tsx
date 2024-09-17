import { CircleHelp, Mail } from 'lucide-react'
import { Button } from './ui/button'
import { Link } from '@tanstack/react-router'

export const CallToAction = () => {
	return (
		<section className='flex min-h-[calc(100vh-9rem)] w-full flex-col justify-between gap-12 md:min-h-[calc(100vh-7.5rem)] md:justify-evenly'>
			{/* TITLE */}
			<div className='mx-auto flex w-full text-3xl font-extrabold uppercase md:w-auto md:text-4xl'>
				<h1 className='*:grow flex w-full flex-col flex-wrap gap-3 rounded-sm bg-background bg-gradient-to-br from-secondary/50 via-background to-accent/50 p-3 shadow-md md:p-6 lg:flex-row'>
					<span className='text-left text-secondary'>
						beautiful sites
					</span>
					<span className='text-center text-foreground md:p-3'>
						{' '}
						designed for{' '}
					</span>
					<span className='self-end text-right text-accent'>
						your needs
					</span>
				</h1>
			</div>

			{/* IMAGES */}
			<div className='*:perspective-[100vw] *:sm:perspective-[100vh] *:h-full container flex flex-col -space-y-[20%] sm:flex-row sm:-space-x-[20%] sm:space-y-0'>
				<div className='scale-90'>
					<img
						src='https://images.ctfassets.net/qzvr7dpiuznd/yVZS4zMdstT7mb1mCck16/ca5e117a76cbe0762b0a04cfd017141d/DB_Main.png?w=800&h=600&fm=webp'
						// src='image-url-full'
						// srcSet='image-url--400 400w, image-url--1200 1200w'
						className='transform rounded-lg object-cover shadow-md -rotate-x-30 sm:rotate-x-0 sm:rotate-y-30'
						alt='back example image of website rotated in 3d'
					/>
				</div>
				<div className=''>
					<img
						src='https://images.ctfassets.net/qzvr7dpiuznd/1P448fZhHIvnCZ9Teps45p/cdd546f8e210447705b7290cd66584f1/AIIR_Home.png?w=800&h=600&fm=webp'
						// src='image-url-full'
						// srcSet='image-url--400 400w, image-url--1200 1200w'
						className='transform rounded-lg object-cover shadow-md -rotate-x-30 sm:rotate-x-0 sm:rotate-y-30'
						alt='middle example image of website rotated in 3d'
					/>
				</div>
				<div className='scale-110'>
					<img
						src='https://images.ctfassets.net/qzvr7dpiuznd/3QeK1xm1FAdaH7b3i3XaxM/ef8aa8960c56bc9a591a4c465142b0f5/knb-home.png?w=800&h=600&fm=webp'
						// src='image-url-full'
						// srcSet='image-url--400 400w, image-url--1200 1200w'
						className='transform rounded-lg object-cover shadow-md -rotate-x-30 sm:rotate-x-0 sm:rotate-y-30'
						alt='front example image of website rotated in 3d'
					/>
				</div>
			</div>

			{/* CTA BUTTONS */}
			<div className='mx-auto flex w-full flex-wrap justify-center gap-6 pb-12 font-bold md:gap-12 md:pb-0'>
				<Button size='lg' asChild>
					<Link to='/faq'>
						<CircleHelp />
						faq
					</Link>
				</Button>
				<Button variant='secondary' size='lg' asChild>
					<Link to='/contact'>
						<Mail />
						get in contact
					</Link>
				</Button>
			</div>
		</section>
	)
}
