import React from 'react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Lock, Minus, Plus } from 'lucide-react'

type PricingItemProps = {
	name: string
	desc: string
	price: number
	active?: boolean
	required?: boolean
	features?: any
	setFeatures?: React.Dispatch<React.SetStateAction<any>>
}

export const PricingItem = ({
	name,
	desc,
	price,
	active = false,
	required = false,
	features,
	setFeatures,
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
		<li className='flex flex-col items-center justify-between gap-3 rounded-lg bg-card p-3 text-card-foreground lg:flex-row lg:p-3 lg:pl-6'>
			<span className='w-full font-bold uppercase text-card-foreground lg:flex-1'>
				{name}
			</span>
			<span className='w-full text-card-foreground/70 lg:flex-[2]'>
				{desc}
			</span>
			<div className='flex w-full justify-end lg:flex-1'>
				{price !== 0 && (
					<Button
						className='flex w-full justify-between gap-6 lg:w-auto'
						variant={active ? 'accent' : 'default'}
						size='card'
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
				)}
			</div>
		</li>
	)
}
