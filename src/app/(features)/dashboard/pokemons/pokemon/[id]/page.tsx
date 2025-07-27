import { PokemonDetailsCard } from "@/lib/features/pokemon/components/PokemonDetailsCard";
import { PokemonMainData } from "@/lib/features/pokemon/components/pokemonMainData";
import { PokemonRowImages } from "@/lib/features/pokemon/components/PokemonRowImages";
import { getPokemonData } from "@/lib/services/PokemonService";
import { Metadata } from "next";
import Image from "next/image";



interface Props {
    params: {
        id: number | string;
    };
}



export async function generateMetadata({ params }: Props): Promise<Metadata> {

    try {
        const { name, id } = await getPokemonData( `${params.id}` );
        
        return {
            title: `#${ id } - ${ name }`,
            description: `Página del pokémon ${ name }`,
            keywords: ['']
        }
        
    } catch (error) {
        return {
            title: `Not Found`,
            description: `Pokémon no encontrado`,
            keywords: ['']
        }
    }

}



export default async function PokemonPage( {params}: Props ){

    const pokemon = await getPokemonData( `${params.id}`);

    return (
        <div className="flex mt-5 flex-col items-center text-slate-800">
            
            <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
                
                <PokemonMainData pokemon={ pokemon } />
            
                <div className="grid grid-cols-2 gap-4 px-2 w-full">

                    <PokemonDetailsCard title="Peso">
                        {
                            pokemon.types.map(type => (
                            <p key={type.slot} className="mr-2 capitalize">{type.type}</p>
                            ))
                        }
                    </PokemonDetailsCard>

                    <PokemonDetailsCard title="Peso">
                        { pokemon.weight }
                    </PokemonDetailsCard>

                    <PokemonRowImages 
                        title="Regular Sprite"
                        pokemonName={ pokemon.name }
                        imagesUrl={[
                            pokemon.pokemonImages.front_default,
                            pokemon.pokemonImages.back_default,
                        ]}
                    />
                    
                    <PokemonRowImages 
                        title="Shiny Sprite"
                        pokemonName={ pokemon.name }
                        imagesUrl={[
                            pokemon.pokemonImages.front_shiny,
                            pokemon.pokemonImages.back_shiny,
                        ]}
                    />

                </div>
            </div>
            </div>
        );
    
}

