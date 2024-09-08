import { Link } from '@tanstack/react-router'
import React from 'react'

type NavButtonProps = {
	children: React.ReactNode
	link: string
}

export const NavButton = ({ children, link }: NavButtonProps) => {
	return (
		<>
			<Link
				to={link}
				className='group relative rounded font-bold uppercase leading-[0.5em] ring-offset-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
			>
				{children}
				<div className='absolute left-1/2 top-1/2 z-[-1] h-6 w-6 -translate-x-1/2 -translate-y-[calc(50%+1px)] rounded-full bg-primary opacity-50 duration-150 group-hover:opacity-100 group-active:h-full group-active:w-[calc(100%+1rem)] group-[&.active]:h-full group-[&.active]:w-[calc(100%+1rem)] group-[&.active]:opacity-100 md:opacity-0'></div>
			</Link>
		</>
	)
}
