import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full text-sm font-bold uppercase ring-offset-secondary transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground hover:bg-primary/90',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				accent: 'bg-accent text-accent-foreground hover:bg-accent/80 hover:shadow-none',
				ghost: 'hover:bg-primary hover:text-primary-foreground hover:shadow-none',
				link: 'text-primary decoration-secondary decoration-2 underline-offset-4 hover:underline hover:shadow-none',
			},
			size: {
				default: 'h-10 px-9 py-4',
				card: 'h-10 rounded-sm px-6 py-2',
				inline: 'mx-0 rounded px-0',
				sm: 'h-6 p-4',
				lg: 'h-12 px-9 py-4',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
	to?: string
	hash?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			asChild = false,
			to = '',
			hash = '',
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : 'button'

		return !to ? (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		) : (
			<Link to={to} tabIndex={-1} hash={hash}>
				<Comp
					className={cn(buttonVariants({ variant, size, className }))}
					ref={ref}
					{...props}
				/>
			</Link>
		)
	},
)
Button.displayName = 'Button'

export { Button, buttonVariants }
