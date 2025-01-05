import { Header } from '@/components/Header'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const FAQPage = () => {
	const faqList = [
		{
			question: 'How do I get a website made?',
			answer: (
				<>
					<ol>
						<li>
							Get in contact to discuss what you need your website
							to accomplish.
						</li>
						<li>
							There will be back and forth to establish the
							requested features with regard to pricing, and you
							will be given an estimated price.
						</li>
						<li>
							There will be another back and forth to establish
							information such as: notable calls to action, tone,
							any custom features you requested, and any overall
							aesthetic decisions like content density or UI
							sharpness. At this point, there will be an agreement
							made on the final price.
						</li>
						<li>
							You will send all the information you want included
							on each page. This includes information such as:
							brand name, colors, tag lines, images, links to
							other websites, etc.
						</li>
						<li>
							You will be sent one or more mockups using some of
							the provided information to confirm the desired
							aesthetic and feature set.
						</li>
						<li>
							On confirming the design, you will pay the agreed
							upon price and work will begin. Throughout
							development, you may be asked clarifying questions
							and be provided with work-in-progress updates should
							the need arise.
						</li>
						<li>
							On completion, you will be provided with the URL for
							the website, as well as any relevant credentials for
							features such as the CMS and source code access. At
							this point, relatively small adjustments can still
							be made for no additional fee, but anything
							requiring more extensive work will involve a
							negotiated fee.
						</li>
					</ol>
				</>
			),
		},
		{
			question: 'How long does it take to finish the website?',
			answer: (
				<>
					<p>
						This heavily depends on the quantity and complexity of
						the requested features. A simple static site with no
						extra features is likely to take around 1–2 weeks.
					</p>
					<p>
						If you have a more aggressive or flexible deadline, an
						adjusted price can be negotiated to accommodate your
						needs.
					</p>
				</>
			),
		},
		{
			question: 'Can I add addional features at a later date?',
			answer: (
				<>
					<p>
						Yes, absolutely. You can request additional features for
						the listed or otherwise agreed upon fee.
					</p>
				</>
			),
		},
		{
			question: 'What types of custom features are possible?',
			answer: (
				<>
					<p>
						Custom features are things not listed on the pricing
						page that are more complicated than static text and
						images, typically involving user interactivity.
					</p>
					<p>
						These can include things like comment sections, user
						uploads, complex UI animations, etc.
					</p>
				</>
			),
		},
		{
			question: 'What is a CMS?',
			answer: (
				<>
					<p>
						CMS stands for "Content Management System", and is used
						to allow you to add or remove specific content on the
						site without the need for web development or programming
						experience.
					</p>
					<p>
						You will need to specify beforehand what content you
						want to be able to change via the CMS. Should you want
						to make changes to which parts of the site use the CMS,
						a small fee will be required.
					</p>
				</>
			),
		},
		{
			question: 'What does access to source code mean? ',
			answer: (
				<>
					<p>
						Gaining access to the source code means that should you
						want to make changes to the website without my
						assistance, you can do so. You could, for example, give
						the code to another developer were I not available.
					</p>
				</>
			),
		},
		{
			question: 'What types of graphic designs are possible?',
			answer: (
				<>
					<p>
						Logos, banners, background art, or any other
						vector-based and somewhat simple still image.
					</p>
				</>
			),
		},
		{
			question: 'What payment methods are available?',
			answer: (
				<>
					<p>PayPal, Zelle, Venmo, Cash App, or Cash.</p>
					<p>Other options may be available on request.</p>
				</>
			),
		},
		{
			question: 'Are there any ongoing costs?',
			answer: (
				<>
					<p>
						Yes, there will be a yearly fee to retain the domain
						name (the url e.g. www.yourwebsite.com). The typical
						price of a domain can vary wildly but is often in the
						range of $15–$35 per year. Said price is not determined
						by—nor paid to—me.
					</p>
					<p>
						Before paying for my services, I will tell you how much
						the domain name you want is. You will be given the
						account credentials to manage your domain, and you may
						do with it what you wish.
					</p>
				</>
			),
		},
		{
			question: 'What is the refund policy?',
			answer: (
				<>
					<p>
						This service is non-refundable. We will work on, and
						agree upon, a design before the initial payment.
					</p>
				</>
			),
		},
	]

	return (
		<>
			<Header title='faq' />
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<p className='container px-0 pb-6'>
					If you do not find a satisfactory answer, or have any
					further questions, please contact me{' '}
					<Button variant='link' size='inline' to='/contact'>
						here
					</Button>
					.
				</p>

				<Accordion
					type='single'
					collapsible
					defaultValue='0'
					className='container rounded-lg bg-card px-6 py-0 text-card-foreground'
				>
					{faqList &&
						faqList.map((qa, index) => {
							const { question, answer } = qa
							return (
								<AccordionItem
									value={index.toString()}
									key={index}
								>
									<AccordionTrigger className='text-card-foreground/80'>
										{question}
									</AccordionTrigger>
									<AccordionContent className='prose'>
										{answer}
									</AccordionContent>
								</AccordionItem>
							)
						})}
				</Accordion>
			</motion.div>
		</>
	)
}

export const Route = createLazyFileRoute('/faq')({
	component: FAQPage,
})
