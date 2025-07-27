import Image from 'next/image';
import React from 'react'





interface PokemonRowImagesProps {
  title: string;
  pokemonName: string;
  imagesUrl: string[];
}





export const PokemonRowImages = ( { imagesUrl, title, pokemonName } : PokemonRowImagesProps ) => {
  
    return (<>
        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">{ title }</p>
            <div className="flex justify-center">
                { imagesUrl.map( image => 
                    
                    <Image
                        key={ image }
                        src={ image }
                        width={100}
                        height={100}
                        alt={`sprite ${ pokemonName }`}
                    />
                )}
            </div>
        </div>
    </>)
}