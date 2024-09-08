import React from 'react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

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
		<li className='flex flex-col items-center justify-between gap-3 rounded-lg bg-card p-3 text-card-foreground md:flex-row md:p-3 md:pl-6'>
			<span className='w-full font-bold uppercase text-card-foreground md:w-1/3'>
				{name}
			</span>
			<span className='w-full text-card-foreground/70 md:w-1/3'>
				{desc}
			</span>
			<div className='flex w-full justify-end md:w-1/3'>
				<Button
					className='flex w-full justify-between gap-6 md:w-auto'
					variant={active ? 'accent' : 'default'}
					size='card'
					onClick={handlePricingClick}
				>
					{required ? (
						<span>required</span>
					) : (
						<span>{active ? 'remove' : 'add'}</span>
					)}
					<span>${price || '___'}</span>
				</Button>
			</div>
		</li>
	)
}
