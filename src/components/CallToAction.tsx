import { CircleHelp, Mail } from 'lucide-react'
import { Button } from './ui/button'
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import example_knb_full from '@/assets/example_knb_full.webp'
import example_knb_1200 from '@/assets/example_knb_1200.webp'
import example_knb_400 from '@/assets/example_knb_400.webp'
import example_imagerequest_full from '@/assets/example_image-request_full.webp'
import example_imagerequest_1200 from '@/assets/example_image-request_1200.webp'
import example_imagerequest_400 from '@/assets/example_image-request_400.webp'
import example_portfolio_full from '@/assets/example_portfolio_full.webp'
import example_portfolio_1200 from '@/assets/example_portfolio_1200.webp'
import example_portfolio_400 from '@/assets/example_portfolio_400.webp'
import { useState } from 'react'

export const CallToAction = () => {
	let [imageLeftLoaded, setImageLeftLoaded] = useState(false)
	let [imageMiddleLoaded, setImageMiddleLoaded] = useState(false)
	let [imageRightLoaded, setImageRightLoaded] = useState(false)

	const container = {
		show: {
			transition: {
				staggerChildren: 0.2,
				staggerDirection: -1,
			},
		},
	}

	const growSlide = {
		hidden: { opacity: 0, scale: 0.8, x: -100 },
		show: {
			opacity: 1,
			scale: 1,
			x: 0,
			transition: {
				type: 'spring',
				opacity: { type: 'tween' },
			},
		},
	}

	return (
		<section className='flex min-h-[calc(100vh-9rem)] w-full flex-col justify-between gap-12 md:min-h-[calc(100vh-7.5rem)] md:justify-evenly'>
			{/* TITLE */}
			<motion.div
				className='mx-auto flex w-full text-3xl font-extrabold uppercase md:w-auto md:text-4xl'
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: 'circOut' }}
			>
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
			</motion.div>

			{/* IMAGES */}
			<motion.div
				className='*:perspective-[100vw] *:sm:perspective-[100vh] *:h-full container flex flex-col -space-y-[20%] sm:flex-row sm:-space-x-[20%] sm:space-y-0'
				variants={container}
				initial='hidden'
				animate={
					imageLeftLoaded &&
					imageMiddleLoaded &&
					imageRightLoaded &&
					'show'
				}
			>
				{/* IMAGE LEFT */}
				<motion.div variants={growSlide}>
					<img
						src={example_portfolio_full}
						srcSet={`${example_portfolio_400} 400w, ${example_portfolio_1200} 1200w`}
						className='scale-90 transform rounded-lg object-cover shadow-md -rotate-x-30 sm:rotate-x-0 sm:rotate-y-30'
						alt='back example image of website rotated in 3d'
						loading='eager'
						onLoad={() => setImageLeftLoaded(true)}
					/>
				</motion.div>

				{/* IMAGE MIDDLE */}
				<motion.div variants={growSlide}>
					<img
						src={example_imagerequest_full}
						srcSet={`${example_imagerequest_400} 400w, ${example_imagerequest_1200} 1200w`}
						className='transform rounded-lg object-cover shadow-md -rotate-x-30 sm:rotate-x-0 sm:rotate-y-30'
						alt='middle example image of website rotated in 3d'
						loading='eager'
						onLoad={() => setImageMiddleLoaded(true)}
					/>
				</motion.div>

				{/* IMAGE RIGHT */}
				<motion.div variants={growSlide}>
					<img
						src={example_knb_full}
						srcSet={`${example_knb_400} 400w, ${example_knb_1200} 1200w`}
						className='scale-110 transform rounded-lg object-cover shadow-md -rotate-x-30 sm:rotate-x-0 sm:rotate-y-30'
						alt='front example image of website rotated in 3d'
						loading='eager'
						onLoad={() => setImageRightLoaded(true)}
					/>
				</motion.div>
			</motion.div>

			{/* CTA BUTTONS */}
			<motion.div
				className='mx-auto flex w-full flex-wrap justify-center gap-6 pb-12 font-bold md:gap-12 md:pb-0'
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.4, duration: 0.5, ease: 'circOut' }}
			>
				<Button size='lg' to='/faq'>
					<CircleHelp />
					faq
				</Button>
				<Button variant='secondary' size='lg' to='/contact'>
					<Mail />
					get in contact
				</Button>
			</motion.div>
		</section>
	)
}
