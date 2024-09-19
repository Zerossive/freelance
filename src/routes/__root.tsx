import { Navbar } from '@/components/Navbar'
import {
	createRootRoute,
	Outlet,
	ScrollRestoration,
} from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import '@/index.css'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

export const Route = createRootRoute({
	component: () => (
		<>
			{/* NAV */}
			<Navbar />

			{/* BODY BG */}
			<div className='w-screen overflow-hidden px-6'>
				{/* BODY CONTENT */}
				<div className='min-h-screen w-full rounded-xl bg-foreground px-6 py-6 text-background'>
					<ScrollRestoration />
					<Outlet />
				</div>
			</div>

			{/* FOOT */}
			<Footer />

			{/* TOAST */}
			<Toaster />

			{/* <TanStackRouterDevtools /> */}
		</>
	),
})
