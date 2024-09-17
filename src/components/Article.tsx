import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ArticleProps extends React.ComponentPropsWithoutRef<'div'> {
	imageLeft?: string
	imageLeftSet?: string
	imageRight?: string
	imageRightSet?: string
	titleLeft?: string
	bodyLeft?: React.ReactNode
	titleRight?: string
	bodyRight?: React.ReactNode
	left?: string
	right?: string
	card?: boolean
	className?: string
}

export const Article = ({
	imageLeft,
	imageLeftSet,
	imageRight,
	imageRightSet,
	titleLeft,
	bodyLeft,
	titleRight,
	bodyRight,
	left,
	right,
	card,
	className,
	...rest
}: ArticleProps) => {
	return (
		<div
			className={twMerge(
				'flex flex-col items-center justify-between gap-6 pt-32 first-of-type:pt-16 lg:flex-row lg:gap-12 lg:pt-64',
				card && '-mx-12',
				className,
			)}
			{...rest}
		>
			{(titleLeft || bodyLeft) && (
				<div
					className={twMerge(
						'order-first w-full text-primary-foreground lg:w-1/2 xl:p-12',
						card &&
							'bg-primary/80 p-6 shadow-md backdrop-blur lg:rounded-r-xl',
						left,
					)}
				>
					<article
						className={twMerge('prose', card && 'prose-invert')}
					>
						{titleLeft && <h2>{titleLeft}</h2>}
						{bodyLeft && <div>{bodyLeft}</div>}
					</article>
				</div>
			)}
			{(titleRight || bodyRight) && (
				<div
					className={twMerge(
						'order-last w-full text-primary-foreground lg:w-1/2 xl:p-12',
						card &&
							'bg-primary/80 p-6 shadow-md backdrop-blur lg:rounded-l-xl lg:rounded-r-none',
						right,
					)}
				>
					<article
						className={twMerge(
							'lg:float-end prose lg:text-right',
							card && 'prose-invert',
						)}
					>
						{titleRight && <h2>{titleRight}</h2>}
						{bodyRight && <div>{bodyRight}</div>}
					</article>
				</div>
			)}
			{imageLeft && (
				<img
					className={twMerge(
						'order-last aspect-video w-full rounded-xl object-cover object-left-top shadow-md lg:order-none lg:w-1/2',
						!card && 'xl:ml-12',
						card &&
							!titleLeft &&
							'rounded-none lg:rounded-xl lg:rounded-l-none',
						left,
					)}
					src={imageLeft}
					srcSet={imageLeftSet}
					alt='screenshot of example website'
				></img>
			)}
			{imageRight && (
				<img
					className={twMerge(
						'aspect-video w-full rounded-xl object-cover object-left-top shadow-md lg:w-1/2',
						!card && 'xl:mr-12',
						card &&
							!titleRight &&
							'rounded-none lg:rounded-xl lg:rounded-r-none',
						right,
					)}
					src={imageRight}
					srcSet={imageRightSet}
					alt='screenshot of example website'
				></img>
			)}
		</div>
	)
}
