import { motion } from 'framer-motion'

type Props = {
	title: string
}

export const Header = ({ title }: Props) => {
	return (
		<motion.header
			className='prose mx-auto w-max py-8 lg:py-16'
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: 'circOut' }}
		>
			<h1 className='underline decoration-secondary decoration-4'>
				{title}
			</h1>
		</motion.header>
	)
}
