
import { ROUTES } from '@/lib/config/Routes';
import { SimplePokemon } from '@/lib/data/entities/SimplePokemon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface PokemonCardImageProps {
    pokemon: SimplePokemon
}

export const PokemonCardImage = ( { pokemon } : PokemonCardImageProps ) => {
  
return (
    <div className=" flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
        <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            height={100} width={100}
            alt={ pokemon.name }
            priority={false}
        />

        <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{ pokemon.name }</p>
        
        <div className="mt-5">
            <Link 
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                href={`${ROUTES.pokemon}/${pokemon.id}`}
            >
                Más información 
            </Link>
        </div>
    </div>
    )
}