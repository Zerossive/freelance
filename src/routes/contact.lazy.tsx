import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { createLazyFileRoute, Link } from '@tanstack/react-router'
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

const formSchema = z.object({
	name: z.string().min(1).max(50),
	email: z.string().email(),
	phone: z.string().min(8).max(20).or(z.literal('')),
	message: z.string().min(1).max(10000),
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

	const [error, setError] = useState(true)

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
						duration: 3000,
						variant: 'default',
					})
					setError(false)
					e.target.reset()
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
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col flex-wrap justify-start gap-6 md:flex-row'
				>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem className='w-full md:flex-1'>
								<FormLabel>
									Name
									<span className='text-destructive'> *</span>
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
							<FormItem className='w-full md:flex-1'>
								<FormLabel>
									Email
									<span className='text-destructive'> *</span>
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
									<span className='text-destructive'> *</span>
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
					{error && (
						<p className='text-destructive'>
							Sorry, there was an error—likely due to spam
							protection—so please check that your email is
							correct and try again. If the error persists, you
							can reach out directly at{' '}
							<Button
								variant='link'
								size='inline'
								type='button'
								// className='text-accent'
								asChild
							>
								<a href='mailto:{import.meta.env.VITE_EMAIL}'>
									{import.meta.env.VITE_EMAIL}
								</a>
							</Button>
							.
						</p>
					)}
					<div className='flex w-full flex-wrap justify-center gap-6'>
						<Button type='button' asChild>
							<Link to='/faq'>FAQ</Link>
						</Button>
						<Button type='submit' variant='secondary'>
							Submit
						</Button>
					</div>
				</form>
			</Form>
		</>
	)
}

export const Route = createLazyFileRoute('/contact')({
	component: ContactPage,
})
