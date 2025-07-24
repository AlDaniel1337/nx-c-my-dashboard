import { PokemonEntity } from '@/lib/data/entities/PokemonEntity'
import Image from 'next/image'
import React from 'react'

interface PokemonDetailsCardProps {
    title: string,
    children?: React.ReactNode;
}


export const PokemonDetailsCard = ( { children, title } : PokemonDetailsCardProps ) => {
  
return (<>
<div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
    <p className="text-sm text-gray-600">{title}</p>
    <span className="text-base font-medium text-navy-700 flex">
        { children }
    </span>
</div>
</>)}