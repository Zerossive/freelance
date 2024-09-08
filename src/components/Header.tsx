import React from 'react'

type Props = {
	title: string
}

export const Header = ({ title }: Props) => {
	return (
		<header className='prose mx-auto w-max py-16 underline decoration-secondary'>
			<h1>{title}</h1>
		</header>
	)
}
