import React from 'react'
import { Button } from './ui/button'
import { Link } from '@tanstack/react-router'

export const CallToAction = () => {
	return (
		<section className='flex min-h-[calc(100vh-9rem)] w-full flex-col justify-between gap-12 md:min-h-[calc(100vh-7.5rem)] md:justify-evenly'>
			{/* TITLE */}
			<div className='mx-auto flex w-full text-3xl font-extrabold uppercase md:w-auto md:text-4xl'>
				<h1 className='*:grow flex w-full flex-col flex-wrap gap-3 rounded-sm bg-background bg-gradient-to-br from-secondary/50 via-background to-accent/50 p-3 md:p-6 lg:flex-row'>
					<span className='text-left text-secondary'>
						beautiful site
					</span>
					<span className='text-center text-foreground md:p-3'>
						{' '}
						designed for{' '}
					</span>
					<span className='self-end text-right text-accent'>
						your needs
					</span>
				</h1>
			</div>

			{/* IMAGES */}
			<img
				src='https://images.ctfassets.net/qzvr7dpiuznd/3QeK1xm1FAdaH7b3i3XaxM/ef8aa8960c56bc9a591a4c465142b0f5/knb-home.png?w=800&h=600&fm=webp'
				className='mx-auto h-1/3 rounded-lg shadow-lg'
			/>

			{/* CTA BUTTONS */}
			<div className='mx-auto flex w-full flex-wrap justify-center gap-6 pb-12 font-bold md:gap-12 md:pb-0'>
				<Button size='lg' asChild>
					<Link to='/faq'>faq</Link>
				</Button>
				<Button variant='secondary' size='lg' asChild>
					<Link to='/contact'>get in contact</Link>
				</Button>
			</div>
		</section>
	)
}
