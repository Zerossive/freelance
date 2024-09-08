import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'

export const NotFound = () => {
	return (
		<>
			<Header title='error 404' />
			<div className='flex flex-col items-center gap-6'>
				<p>The page you are looking for does not exist.</p>
				<Button variant='link' onClick={() => window.history.back()}>
					go back
				</Button>
			</div>
		</>
	)
}
