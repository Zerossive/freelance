import { createLazyFileRoute } from '@tanstack/react-router'
import { CallToAction } from '@/components/CallToAction'
import { Article } from '@/components/Article'
import { Button } from '@/components/ui/button'

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
					<div className='flex justify-center md:inline-block'>
						<Button asChild className=''>
							<a
								href='https://knbracing.com/'
								className='no-underline'
								target='_blank'
							>
								view example
							</a>
						</Button>
					</div>
				</>
				imageRight='https://images.ctfassets.net/qzvr7dpiuznd/3QeK1xm1FAdaH7b3i3XaxM/ef8aa8960c56bc9a591a4c465142b0f5/knb-home.png?w=800&h=600&fm=webp'
				id='brand'
			/>

			<Article
				imageLeft='https://images.ctfassets.net/qzvr7dpiuznd/3knjM2WiVAaGzcfXEr0koW/f07112bf17abc6ced9d73d889dbdbead/DH_Main.png?w=800&h=600&fm=webp'
				titleRight='the sky is the limit'
				bodyRight=<>
					<p>
						From clean, modern designs for online portfolios to
						user-friendly e-commerce stores, I offer personalized
						solutions tailored to your business type. Whatever your
						goals, I can create a website that fits you perfectly.
					</p>
					<div className='flex justify-center md:inline-block'>
						<Button asChild>
							<a
								href='https://dannyharris.info/'
								className='no-underline'
								target='_blank'
							>
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
				left='bg-accent'
				className='gap-16 md:gap-32'
				id='about'
				card
			/>
		</>
	)
}

export const Route = createLazyFileRoute('/')({
	component: HomePage,
})
