import { notFound } from "next/navigation";
import { PokemonEntity } from "../data/entities/PokemonEntity";
import { PokemonResponse } from "../data/interfaces/PokemonResponse";
import { PokemonResponseToInterface } from "../data/mappers/PokemonResponseToInterface.mapper";

export const getPokemonData = async (id: string): Promise<PokemonEntity> => {
    
    try {
        const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then( response => response.json() );
    
        return PokemonResponseToInterface( data );
    } catch (error) {
        notFound()
    }
}