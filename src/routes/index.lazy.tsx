import { createLazyFileRoute } from '@tanstack/react-router'
import { CallToAction } from '@/components/CallToAction'
import { Article } from '@/components/Article'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import example_knb_full from '@/assets/example_knb_full.webp'
import example_knb_1200 from '@/assets/example_knb_1200.webp'
import example_knb_400 from '@/assets/example_knb_400.webp'
import example_portfolio_full from '@/assets/example_portfolio_full.webp'
import example_portfolio_1200 from '@/assets/example_portfolio_1200.webp'
import example_portfolio_400 from '@/assets/example_portfolio_400.webp'

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
						Your website should tell your story. I create custom
						sites that reflect the unique personality of your
						business, helping you stand out in a crowded online
						space.
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
						user-friendly e-commerce stores, I offer personalized
						solutions tailored to your business type. Whatever your
						goals, I can create a website that fits you perfectly.
					</p>
					<div className='flex justify-center lg:inline-block'>
						<Button asChild>
							<a
								href='https://dannyharris.info/'
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

			<Article
				titleLeft='about the service'
				bodyLeft=<>
					<p>
						I create custom websites tailored to your needs,
						focusing on clean design, functionality, and user
						experience. Whether you're building an online presence
						or growing your brand, I'll help bring your vision to
						life with a website that looks great and works
						perfectly.
					</p>
				</>
				titleRight='about me'
				bodyRight=<>
					<p>
						I'm an experienced React developer with a strong
						background in creating mobile-optimized, responsive web
						applications using JavaScript frameworks. Skilled in
						collaborating with teams and working independently,
						quickly learning new technologies and incorporating
						thoughtful modern UX design into projects.
					</p>
				</>
				left='bg-accent/80'
				className='gap-16 lg:gap-32'
				id='about'
				card
			/>
		</>
	)
}

export const Route = createLazyFileRoute('/')({
	component: HomePage,
})
