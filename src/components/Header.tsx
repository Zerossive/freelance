type Props = {
	title: string
}

export const Header = ({ title }: Props) => {
	return (
		<header className='prose mx-auto w-max py-8 underline decoration-secondary lg:py-16'>
			<h1>{title}</h1>
		</header>
	)
}
