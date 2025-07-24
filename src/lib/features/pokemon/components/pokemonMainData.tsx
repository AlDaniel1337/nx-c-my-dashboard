import { PokemonEntity } from '@/lib/data/entities/PokemonEntity'
import Image from 'next/image'
import React from 'react'

interface PokemonMainDataProps {
    pokemon: PokemonEntity
}


export const PokemonMainData = ( { pokemon } : PokemonMainDataProps ) => {
  
return (<>
<div className="mt-2 mb-8 w-full">
    <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
        #{pokemon.id} {pokemon.name}
    </h1>

    <div className="flex flex-col justify-center items-center">
        <Image
            src={ pokemon.mainImage }
            width={150}
            height={150}
            alt={`Imagen del pokemon ${pokemon.name}`}
            className="mb-5"
        />

        <div className="flex flex-wrap">
            {
                pokemon.moves.map(move => (
                    <p key={move} className="mr-2 capitalize">{ move }</p>
                ))
            }
        </div>

    </div>
</div>
</>)}