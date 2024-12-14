import React from 'react'
import { HorizontalType } from '@/app/progressione-orizzontale/page'

import { DotIcon } from 'lucide-react'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from 'next/image'
import { Button } from '../ui/button'

const Card = ({ data } : { data: HorizontalType }) => {
	const { name, description, tasks, image, color, border } = data

	const borderColors = {
		green: 'border-green-600',
		yellow: 'border-yellow-600',
		red: 'border-red-600',
		blue: 'border-blue-600',
	};

	const borderBgColors = {
		green: 'bg-green-400 hover:bg-green-500',
		yellow: 'bg-yellow-400 hover:bg-yellow-500',
		red: 'bg-red-400 hover:bg-red-500 text-white',
		blue: 'bg-blue-400 hover:bg-blue-500',
	};

	return (
		<div>
			<AlertDialog>
				<AlertDialogTrigger className='border w-full h-full flex flex-col gap-1 p-4 rounded-lg items-center justify-center group'>
					<Image src={image} alt={`Immagine dell'abilità: ${name}`} width={80} height={80} className='rounded-full' />
					<h1 className='text-2xl font-semibold group-hover:underline-offset-2 group-hover:underline group-duration-200'>{name}</h1>
					<h1 className='line-clamp-2 mt-1.5'>{description}</h1>
				</AlertDialogTrigger>
				<AlertDialogContent className={`${color === 'yellow' ? 'bg-yellow-300' : 'bg-green-200'} border-[16px] rounded-lg ${borderColors[border]} `}>
					<AlertDialogHeader className='rounded-xl'>
						<AlertDialogTitle className='text-4xl font-bold flex items-center justify-between'>
							{name.toUpperCase()} 
							<Image src={image} alt={`Immagine dell'abilità: ${name}`} width={80} height={80} className='rounded-full' />
						</AlertDialogTitle>
						<AlertDialogDescription>
							{description}
						</AlertDialogDescription>
						<ul className='mt-3 list-decimal ml-5'>
								<li className='my-1 font-medium'>Prova da definire con lo Staff di Reparto.</li>
								{tasks.map((task, index) => (
									<li className='my-1' key={index}><p>{task}</p></li>
								))}
							</ul>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel className={`${color === 'yellow' ? 'bg-yellow-300' : 'bg-green-200'} rounded-lg ${borderColors[border]} ${borderBgColors[border]} `}>
							Chiudi
						</AlertDialogCancel>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

		</div>
	)
}

export default Card