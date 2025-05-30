import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { z } from 'zod'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'
import emailjs from '@emailjs/browser'
import { CircleHelp, Send } from 'lucide-react'
import { motion } from 'framer-motion'

const formSchema = z.object({
	name: z.string().min(1).max(50),
	email: z.string().email(),
	phone: z.string().min(8).max(20).or(z.literal('')),
	message: z.string().min(1).max(10000),
	// TESTING:
	// name: z.string(),
	// email: z.string(),
	// phone: z.string(),
	// message: z.string(),
})

export const ContactPage = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			message: '',
		},
	})

	const [error, setError] = useState(false)

	async function onSubmit(values: z.infer<typeof formSchema>, e: any) {
		console.log(values)

		emailjs
			.sendForm('service_3649z97', 'template_3o8fbx4', e.target, {
				publicKey: 'user_XauhbreBLfDA1556zFwvO',
			})
			.then(
				() => {
					console.log('SUCCESS')
					toast({
						title: 'SUCCESS',
						description: 'Thank you for reaching out!',
						duration: 6000,
					})
					setError(false)
					form.reset()
				},
				(error) => {
					console.log('ERROR', error.text)
					toast({
						title: 'ERROR',
						description: error.text,
						duration: 3000,
						variant: 'destructive',
					})
					setError(true)
				},
			)
	}

	return (
		<>
			<Header title='contact' />

			<Form {...form}>
				<motion.form
					onSubmit={form.handleSubmit(onSubmit)}
					className='*:flex-1 flex flex-col flex-wrap justify-start gap-6 lg:container lg:flex-row lg:gap-12'
					id='myForm'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					<div className='flex flex-col gap-6'>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem className='w-full'>
									<FormLabel>
										Name
										<span className='text-destructive'>
											{' '}
											*
										</span>
									</FormLabel>
									<FormControl>
										<Input
											placeholder='Firstname Lastname'
											{...field}
										/>
									</FormControl>
									<FormDescription>Required</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem className='w-full'>
									<FormLabel>
										Email
										<span className='text-destructive'>
											{' '}
											*
										</span>
									</FormLabel>
									<FormControl>
										<Input
											placeholder='username@email.com'
											{...field}
										/>
									</FormControl>
									<FormDescription>Required</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='phone'
							render={({ field }) => (
								<FormItem className='w-full'>
									<FormLabel>Phone #</FormLabel>
									<FormControl>
										<Input
											placeholder='(123) 456-7890'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='message'
							render={({ field }) => (
								<FormItem className='w-full grow'>
									<FormLabel>
										Message
										<span className='text-destructive'>
											{' '}
											*
										</span>
									</FormLabel>
									<FormControl>
										<Textarea
											placeholder='Describe any questions you have'
											{...field}
										/>
									</FormControl>
									<FormDescription>Required</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className='flex flex-col justify-center gap-6'>
						<p>
							Please include any relevant information in the
							message box. Make sure to check that your email is
							correct, or I will have no way of getting back to
							you.
						</p>
						<p>
							If you have specific questions, it may be quicker to
							read through the{' '}
							<Button
								type='button'
								variant='link'
								size='inline'
								to='/faq'
							>
								frequently asked questions
							</Button>{' '}
							before emailing me.
						</p>
						{error && (
							<p className='text-destructive'>
								Sorry, there was an error—likely due to spam
								protection—so please check that your email is
								correct and try again. If the error persists,
								you can reach out directly at{' '}
								<Button
									variant='link'
									size='inline'
									type='button'
									to={`mailto:${import.meta.env.VITE_EMAIL}`}
								>
									{import.meta.env.VITE_EMAIL}
								</Button>
								.
							</p>
						)}
						<div className='flex w-full flex-wrap justify-center gap-6 lg:justify-start'>
							<Button type='button' size='icon' to='/faq'>
								<CircleHelp />
							</Button>
							<Button type='submit' variant='secondary'>
								<Send />
								Submit
							</Button>
						</div>
					</div>
				</motion.form>
			</Form>
		</>
	)
}

export const Route = createLazyFileRoute('/contact')({
	component: ContactPage,
})
