import { createLazyFileRoute } from '@tanstack/react-router'
import { CallToAction } from '@/components/CallToAction'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import example_knb_full from '@/assets/example_knb_full.webp'
import example_knb_1200 from '@/assets/example_knb_1200.webp'
import example_knb_400 from '@/assets/example_knb_400.webp'
import example_portfolio_full from '@/assets/example_portfolio_full.webp'
import example_portfolio_1200 from '@/assets/example_portfolio_1200.webp'
import example_portfolio_400 from '@/assets/example_portfolio_400.webp'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { motion } from 'framer-motion'
import { Article } from '@/components/Article'

export const HomePage = () => {
	const carouselItems = [
		{
			imageSrc: '/favicon.svg',
			title: 'about the service',
			body: "I create custom websites tailored to your needs, focusing on clean design, functionality, and user experience. Whether you're building an online presence or growing your brand, I'll help bring your vision to life with a website that looks great and works perfectly.",
		},
		{
			imageSrc: 'https://dannyharris.dev/favicon.svg',
			title: 'about me',
			body: "I'm an experienced React developer with a strong background of creating mobile-optimized, responsive web applications using JavaScript frameworks. Skilled at collaborating with teams and working independently, quickly learning new technologies and incorporating thoughtful modern UX design into projects.",
		},
	]
	return (
		<>
			<CallToAction></CallToAction>

			<Article
				article=<>
					<h2>showcase your brand</h2>
					<p>
						A website is more than just an online presence—it's your
						digital storefront. Whether you're a local café or a
						personal trainer, a well-designed website helps your
						customers find you, learn about your services, and
						easily get in touch.
					</p>
					<p>
						<b>Your</b> website should tell <b>your</b> story. I
						create custom sites that reflect the unique personality
						of your business, helping you <b>stand out</b> in a
						crowded online space.
					</p>
					<div className='flex justify-center lg:inline-block'>
						<Button to='https://knbracing.com/'>
							<ExternalLink />
							view example
						</Button>
					</div>
				</>
				image={example_knb_full}
				imageSet={`${example_knb_400} 400w, ${example_knb_1200} 1200w`}
				id='brand'
			/>

			<Article
				image={example_portfolio_full}
				imageSet={`${example_portfolio_400} 400w, ${example_portfolio_1200} 1200w`}
				article=<>
					<h2>the sky is the limit</h2>
					<p>
						From clean, modern designs for online portfolios to
						user-friendly e-commerce stores, I offer{' '}
						<b>personalized solutions</b> tailored to your business.
						Whatever your goals are—I can create a website that fits
						you perfectly.
					</p>
					<div className='flex justify-center lg:inline-block'>
						<Button to='https://dannyharris.dev/'>
							<ExternalLink />
							view example
						</Button>
					</div>
				</>
				reverse
				id='limit'
			/>

			{/* About */}
			<Carousel
				className='mt-32 pb-16 xl:mb-16 xl:px-12'
				opts={{ loop: true, align: 'start' }}
			>
				<CarouselContent>
					{carouselItems.map((item, index) => {
						const { imageSrc: imageSrc, title, body } = item

						return (
							<CarouselItem
								className='group flex items-center justify-center gap-6 xl:basis-1/2'
								key={index}
							>
								{/* Icon */}
								<motion.div
									className='hidden h-auto w-20 items-center group-even:order-last xl:flex xl:h-full xl:w-full'
									initial={{ opacity: 0, rotate: -90 }}
									whileInView={{ opacity: 1, rotate: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										ease: 'circOut',
									}}
								>
									<img
										src={imageSrc}
										className='w-full'
										alt='website logo'
									/>
								</motion.div>

								{/* Article */}
								<article className='prose'>
									<h2 className='flex items-center gap-3'>
										<img
											src={imageSrc}
											className='m-0 h-10 w-auto xl:hidden'
											alt='website logo'
										/>
										{title}
									</h2>
									<p>{body}</p>
								</article>
							</CarouselItem>
						)
					})}
				</CarouselContent>

				{/* Carousel Controls */}
				<CarouselPrevious className='xl:hidden' />
				<CarouselNext className='xl:hidden' />
			</Carousel>
		</>
	)
}

export const Route = createLazyFileRoute('/')({
	component: HomePage,
})
