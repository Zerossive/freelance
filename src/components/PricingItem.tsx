import React from 'react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Lock, Minus, Plus } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

type PricingItemProps = {
	name: string
	desc: string
	price: number
	active?: boolean
	required?: boolean
	features?: any
	setFeatures?: React.Dispatch<React.SetStateAction<any>>
	icon?: React.ReactNode
	className?: string
}

export const PricingItem = ({
	name,
	desc,
	price,
	active = false,
	required = false,
	features,
	setFeatures,
	icon,
	className,
}: PricingItemProps) => {
	if (required) {
		active = true
	}

	const { toast } = useToast()

	const handlePricingClick = () => {
		if (required) {
			toast({
				title: 'This is a required feature',
				variant: 'destructive',
				duration: 3000,
			})
			return null
		}
		if (setFeatures) {
			const newFeatures = features.map((feature: any) => {
				if (feature.name === name) {
					return {
						...feature,
						active: !feature.active,
					}
				}
				return feature
			})

			setFeatures(newFeatures)
		}
	}

	return (
		<li
			className={twMerge(
				'flex flex-wrap items-center gap-3 lg:gap-6',
				className,
			)}
		>
			<motion.div
				className='*:h-full *:w-full *:text-primary aspect-square min-w-fit max-w-[50%] flex-1 lg:order-last'
				initial={{ opacity: 0, rotate: -90 }}
				whileInView={{ opacity: 1, rotate: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: 0.5, ease: 'circOut' }}
			>
				{icon}
			</motion.div>
			<div className='flex flex-[4] flex-col items-start justify-center gap-3 lg:flex-[10]'>
				<span className='font-bold uppercase'>
					{/* <span className='*:h-full *:w-full *:text-primary mr-3 inline-block aspect-square h-10 translate-y-1/3'> */}
					{/* 	{icon} */}
					{/* </span> */}
					{name}
				</span>
				<span className='max-w-prose'>{desc}</span>
				{price !== 0 && (
					<Button
						variant={active ? 'accent' : 'default'}
						// size='sm'
						onClick={handlePricingClick}
						className='hidden lg:flex'
					>
						{required && (
							<>
								required
								<Lock />
							</>
						)}
						{!required && !active && (
							<>
								add
								<Plus />
							</>
						)}
						{!required && active && (
							<>
								remove
								<Minus />
							</>
						)}
						<span>${price || '___'}</span>
					</Button>
				)}
			</div>
			{price !== 0 && (
				<div className='flex w-full justify-center lg:hidden'>
					<Button
						variant={active ? 'accent' : 'default'}
						onClick={handlePricingClick}
					>
						{required && (
							<>
								required
								<Lock />
							</>
						)}
						{!required && !active && (
							<>
								add
								<Plus />
							</>
						)}
						{!required && active && (
							<>
								remove
								<Minus />
							</>
						)}
						<span>${price || '___'}</span>
					</Button>
				</div>
			)}
		</li>
	)
}
