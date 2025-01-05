import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ArticleProps extends React.ComponentPropsWithoutRef<'div'> {
	image?: string
	imageSet?: string
	imageAlt?: string
	imageClassName?: string
	article?: React.ReactNode
	articleClassName?: string
	card?: boolean
	cardColor?: string
	reverse?: boolean
	first?: boolean
	className?: string
}

export const Article = ({
	image,
	imageSet,
	imageAlt,
	imageClassName,
	article,
	articleClassName,
	card = false,
	cardColor = 'bg-primary/10',
	reverse = false,
	first = false,
	className,
	...props
}: ArticleProps) => {
	const [isLoaded, setIsLoaded] = useState(false)

	return (
		<div
			className={cn(
				'mt-32 flex w-full flex-col items-center justify-between gap-6 lg:flex-row xl:p-12',
				first && 'mt-0',
				(!image || !article) && 'lg:flex-col',
				reverse && 'lg:flex-row-reverse',
				className,
			)}
			{...props}
		>
			{/* Article */}
			{article && (
				<motion.div
					initial={{ x: reverse ? 100 : -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.3, ease: 'circOut' }}
					className={cn(
						'prose lg:w-1/2',
						reverse && !card && 'lg:text-right',
						card &&
							'prose-invert rounded-xl bg-primary p-6 shadow-md',
						articleClassName,
					)}
				>
					{article}
				</motion.div>
			)}

			{/* Image */}
			{image && (
				<div className='lg:w-1/2'>
					<motion.img
						key={image}
						initial={{ x: reverse ? -50 : 50, opacity: 0 }}
						whileInView={isLoaded ? { x: 0, opacity: 1 } : {}}
						viewport={{ once: true }}
						transition={{ duration: 0.3, ease: 'circOut' }}
						src={image}
						srcSet={imageSet}
						alt={imageAlt}
						className={cn(
							'float-right max-h-[80svh] rounded-xl bg-primary object-contain object-center shadow-md',
							reverse && 'float-left',
							imageClassName,
						)}
						onLoad={() => {
							setIsLoaded(true)
						}}
						loading='lazy'
					/>
				</div>
			)}
		</div>
	)
}
