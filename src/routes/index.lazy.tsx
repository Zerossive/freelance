import { createLazyFileRoute } from '@tanstack/react-router'
import { CallToAction } from '@/components/CallToAction'
import { Article } from '@/components/Article'
import { Button } from '@/components/ui/button'
import { CircleUser, ExternalLink, PanelsTopLeft } from 'lucide-react'
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

export const HomePage = () => {
	return (
		<>
			<CallToAction></CallToAction>

			<Article
				titleLeft='showcase your brand'
				bodyLeft=<>
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
						<Button asChild>
							<a
								href='https://knbracing.com/'
								className='no-underline'
								target='_blank'
							>
								<ExternalLink />
								view example
							</a>
						</Button>
					</div>
				</>
				imageRight={example_knb_full}
				imageRightSet={`${example_knb_400} 400w, ${example_knb_1200} 1200w`}
				id='brand'
			/>

			<Article
				imageLeft={example_portfolio_full}
				imageLeftSet={`${example_portfolio_400} 400w, ${example_portfolio_1200} 1200w`}
				titleRight='the sky is the limit'
				bodyRight=<>
					<p>
						From clean, modern designs for online portfolios to
						user-friendly e-commerce stores, I offer{' '}
						<b>personalized solutions</b> tailored to your business.
						Whatever your goals are—I can create a website that fits
						you perfectly.
					</p>
					<div className='flex justify-center lg:inline-block'>
						<Button asChild>
							<a
								href='https://dannyharris.dev/'
								className='no-underline'
								target='_blank'
							>
								<ExternalLink />
								view example
							</a>
						</Button>
					</div>
				</>
				id='limit'
			/>

			{/* <Article */}
			{/* 	titleLeft='about the service' */}
			{/* 	bodyLeft=<> */}
			{/* 		<p> */}
			{/* 			I create custom websites tailored to your needs, */}
			{/* 			focusing on clean design, functionality, and user */}
			{/* 			experience. Whether you're building an online presence */}
			{/* 			or growing your brand, I'll help bring your vision to */}
			{/* 			life with a website that looks great and works */}
			{/* 			perfectly. */}
			{/* 		</p> */}
			{/* 	</> */}
			{/* 	titleRight='about me' */}
			{/* 	bodyRight=<> */}
			{/* 		<p> */}
			{/* 			I'm an experienced React developer with a strong */}
			{/* 			background of creating mobile-optimized, responsive web */}
			{/* 			applications using JavaScript frameworks. Skilled at */}
			{/* 			collaborating with teams and working independently, */}
			{/* 			quickly learning new technologies and incorporating */}
			{/* 			thoughtful modern UX design into projects. */}
			{/* 		</p> */}
			{/* 	</> */}
			{/* 	left='bg-accent/80' */}
			{/* 	className='gap-16 lg:gap-32' */}
			{/* 	id='about' */}
			{/* 	card */}
			{/* /> */}

			{/* About */}
			<Carousel
				className='mt-32 pb-16 xl:mb-16 xl:px-12'
				opts={{ loop: true, align: 'start' }}
			>
				<CarouselContent>
					{/* About Service */}
					<CarouselItem className='flex items-center gap-6 xl:basis-1/2'>
						{/* Icon */}
						<motion.div
							className='hidden h-auto w-20 xl:block xl:h-full xl:w-full'
							initial={{ opacity: 0, rotate: -90 }}
							whileInView={{ opacity: 1, rotate: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, ease: 'circOut' }}
						>
							<PanelsTopLeft className='h-full w-full text-primary' />
						</motion.div>

						{/* Article */}
						<article className='prose'>
							<h2 className='flex items-center gap-3'>
								<PanelsTopLeft className='text-primary xl:hidden' />
								about the service
							</h2>
							<p>
								I create custom websites tailored to your needs,
								focusing on clean design, functionality, and
								user experience. Whether you're building an
								online presence or growing your brand, I'll help
								bring your vision to life with a website that
								looks great and works perfectly.
							</p>
						</article>
					</CarouselItem>

					{/* About Me */}
					<CarouselItem className='flex flex-row items-center gap-6 xl:basis-1/2'>
						{/* Article */}
						<article className='prose xl:text-right'>
							<h2 className='flex items-center gap-3 xl:justify-end'>
								<CircleUser className='text-primary xl:hidden' />
								about me
							</h2>
							<p>
								I'm an experienced React developer with a strong
								background of creating mobile-optimized,
								responsive web applications using JavaScript
								frameworks. Skilled at collaborating with teams
								and working independently, quickly learning new
								technologies and incorporating thoughtful modern
								UX design into projects.
							</p>
						</article>

						{/* Icon */}
						<motion.div
							className='hidden h-auto w-20 xl:block xl:h-full xl:w-full'
							initial={{ opacity: 0, rotate: -90 }}
							whileInView={{ opacity: 1, rotate: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, ease: 'circOut' }}
						>
							<CircleUser className='h-full w-full text-accent' />
						</motion.div>
					</CarouselItem>

					{/* TESTING */}
					{/* <CarouselItem className='flex items-center gap-6 xl:basis-1/2'> */}
					{/* 	<motion.div */}
					{/* 		className='hidden h-auto w-20 xl:block xl:h-full xl:w-full' */}
					{/* 		initial={{ opacity: 0, rotate: -90 }} */}
					{/* 		whileInView={{ opacity: 1, rotate: 0 }} */}
					{/* 		viewport={{ once: true }} */}
					{/* 		transition={{ duration: 0.5, ease: 'circOut' }} */}
					{/* 	> */}
					{/* 		<PanelsTopLeft className='h-full w-full text-primary' /> */}
					{/* 	</motion.div> */}
					{/**/}
					{/* 	<article className='prose'> */}
					{/* 		<h2 className='flex items-center gap-3'> */}
					{/* 			<PanelsTopLeft className='text-primary xl:hidden' /> */}
					{/* 			about the service */}
					{/* 		</h2> */}
					{/* 		<p> */}
					{/* 			Lorem ipsum dolor sit amet, consectetur */}
					{/* 			adipiscing elit, sed do eiusmod tempor */}
					{/* 			incididunt ut labore et dolore magnam aliquam */}
					{/* 			quaerat voluptatem. */}
					{/* 		</p> */}
					{/* 	</article> */}
					{/* </CarouselItem> */}
					{/**/}
					{/* <CarouselItem className='flex flex-row items-center gap-6 xl:basis-1/2'> */}
					{/* 	<article className='prose xl:text-right'> */}
					{/* 		<h2 className='flex items-center gap-3 xl:justify-end'> */}
					{/* 			<CircleUser className='text-primary xl:hidden' /> */}
					{/* 			about me */}
					{/* 		</h2> */}
					{/* 		<p> */}
					{/* 			Lorem ipsum dolor sit amet, consectetur */}
					{/* 			adipiscing elit, sed do eiusmod tempor */}
					{/* 			incididunt ut labore et dolore magnam aliquam */}
					{/* 			quaerat voluptatem. */}
					{/* 		</p> */}
					{/* 	</article> */}
					{/**/}
					{/* 	<motion.div */}
					{/* 		className='hidden h-auto w-20 xl:block xl:h-full xl:w-full' */}
					{/* 		initial={{ opacity: 0, rotate: -90 }} */}
					{/* 		whileInView={{ opacity: 1, rotate: 0 }} */}
					{/* 		viewport={{ once: true }} */}
					{/* 		transition={{ duration: 0.5, ease: 'circOut' }} */}
					{/* 	> */}
					{/* 		<CircleUser className='h-full w-full text-accent' /> */}
					{/* 	</motion.div> */}
					{/* </CarouselItem> */}
				</CarouselContent>
				<CarouselPrevious className='xl:hidden' />
				<CarouselNext className='xl:hidden' />
			</Carousel>
		</>
	)
}

export const Route = createLazyFileRoute('/')({
	component: HomePage,
})
