import { Header } from '@/components/Header'
import { PricingItem } from '@/components/PricingItem'
import { Button } from '@/components/ui/button'
import { createLazyFileRoute, Link } from '@tanstack/react-router'
import {
	CircleHelp,
	CodeXml,
	Mail,
	Image,
	PanelsTopLeft,
	Pencil,
	SwatchBook,
	PackagePlus,
} from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export const PricingPage = () => {
	const baseline = 300
	const [features, setFeatures] = useState([
		{
			name: 'cms updates',
			desc: 'Update content on the fly with no coding experience. Without this feature, there will be a small fee anytime you want simple changes to be made.',
			price: 40,
			icon: <Pencil strokeWidth={1} />,
			active: false,
		},
		{
			name: 'graphic art',
			desc: 'Custom designed artwork such as logos, banners, etc.',
			price: 20,
			icon: <Image strokeWidth={1} />,
			active: false,
		},
		{
			name: 'source code access',
			desc: 'Gain access to the source code so you can make more complicated changes yourself.',
			price: 100,
			icon: <CodeXml strokeWidth={1} />,
			active: false,
		},
		{
			name: 'forms',
			desc: 'Allow your users to fill out forms that can be sent to you.',
			price: 40,
			icon: <Mail strokeWidth={1} />,
			active: false,
		},
		{
			name: 'theme toggle',
			desc: 'Allow the user to choose between different themes such as light or mode. dark',
			price: 20,
			icon: <SwatchBook strokeWidth={1} />,
			active: false,
		},
		{
			name: 'custom features',
			desc: 'Features not listed may still be possible. Reach out for more information if you have an idea in mind.',
			price: 0,
			icon: <PackagePlus strokeWidth={1} />,
			active: false,
		},
	])

	return (
		<>
			<Header title='Pricing' />

			<motion.ul
				className='flex flex-col gap-6 lg:container'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
				<li id='required'>
					<h2 className='text-xl underline'>required:</h2>
				</li>

				<PricingItem
					name='Static Website'
					desc='A simple site with your requested content.'
					price={baseline}
					required
					icon={<PanelsTopLeft strokeWidth={1} />}
					className='border-none'
				/>

				<li id='additional'>
					<h2 className='pt-6 text-xl underline'>
						additional features:
					</h2>
				</li>

				{features && (
					<div className='flex flex-col gap-12'>
						{features.map((feature) => {
							const { name, desc, price, icon, active } = feature
							return (
								<PricingItem
									key={name}
									name={name}
									desc={desc}
									price={price}
									active={active}
									features={features}
									icon={icon}
									setFeatures={setFeatures}
								/>
							)
						})}
					</div>
				)}
			</motion.ul>

			<p className='pt-6 lg:container'>
				The pricing on this page is for estimation only, and may not
				reflect the final price. To get a more accurate quote, contact
				me with you desired features as outlined in the{' '}
				<Button variant='link' size='inline' asChild>
					<Link to='/faq'>frequently asked questions</Link>
				</Button>
				.
			</p>

			<div className='flex flex-col justify-end pt-6 lg:container md:flex-row'>
				<div className='flex items-center justify-center rounded-t-lg bg-accent px-9 py-2 text-center font-bold uppercase text-accent-foreground md:rounded-l-full'>
					estimated total:
				</div>

				<div className='flex items-center justify-center rounded-b-lg bg-accent/70 px-9 py-2 text-center font-bold uppercase text-accent-foreground md:rounded-r-full'>
					$
					{features.reduce((a, b) => {
						if (b.active) return a + b.price
						return a
					}, baseline)}
				</div>
			</div>

			<div className='flex w-full flex-wrap items-center justify-center gap-6 pt-6'>
				<Button size='icon' asChild>
					<Link to='/faq'>
						<CircleHelp />
					</Link>
				</Button>

				<Button variant='secondary' asChild>
					<Link to='/contact'>
						<Mail />
						get in contact
					</Link>
				</Button>
			</div>
		</>
	)
}

export const Route = createLazyFileRoute('/pricing')({
	component: PricingPage,
})
