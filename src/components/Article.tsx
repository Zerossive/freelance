import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ArticleProps extends React.ComponentPropsWithoutRef<'div'> {
	imageLeft?: string
	imageRight?: string
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
	imageRight,
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
				'flex flex-col items-center justify-between gap-6 pt-32 first-of-type:pt-16 md:flex-row md:gap-12 md:pt-64',
				card && '-mx-12',
				className,
			)}
			{...rest}
		>
			{(titleLeft || bodyLeft) && (
				<div
					className={twMerge(
						'order-first w-full text-primary-foreground md:w-1/2 md:p-12',
						card && 'bg-primary p-6 shadow-xl md:rounded-r-xl',
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
						'order-last w-full text-primary-foreground md:w-1/2 md:p-12',
						card &&
							'bg-primary p-6 shadow-xl md:rounded-l-xl md:rounded-r-none',
						right,
					)}
				>
					<article
						className={twMerge(
							'float-end prose md:text-right',
							card && 'prose-invert',
						)}
					>
						{titleRight && <h2>{titleRight}</h2>}
						{bodyRight && <div>{bodyRight}</div>}
					</article>
				</div>
			)}
			{imageLeft && (
				<div
					className={twMerge(
						'order-last aspect-video w-full rounded-xl bg-cover bg-left-top p-12 shadow-xl md:order-none md:w-1/2',
						card &&
							!titleLeft &&
							'rounded-none md:rounded-xl md:rounded-l-none',
						left,
					)}
					style={{
						backgroundImage: `url(${imageLeft})`,
					}}
				></div>
			)}
			{imageRight && (
				<div
					className={twMerge(
						'aspect-video w-full rounded-xl bg-cover bg-left-top p-12 shadow-xl md:w-1/2',
						card &&
							!titleRight &&
							'rounded-none md:rounded-xl md:rounded-r-none',
						right,
					)}
					style={{
						backgroundImage: `url(${imageRight})`,
					}}
				></div>
			)}
		</div>
	)
}
