import { PokemonsReponse } from "@/lib/data/interfaces/PokemonsResponse";
import { SimplePokemon } from "@/lib/data/entities/SimplePokemon";
import { PokemonGrid } from "@/lib/features/pokemons/components/PokemonGrid";
import Image from "next/image";
import { notFound } from "next/navigation";

const getPokemons = async( limit = 20, offset = 0): Promise<SimplePokemon[]> => {

    // throw notFound()

    const data: PokemonsReponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then( response => response.json() );

    const pokemons = data.results.map( pokemon => ({
        id: pokemon.url.split('/').at(-2) ?? "",
        name: pokemon.name
    }))

    return pokemons;
}

export default async function PokemonsPage(){

 const pokemons = await getPokemons(151);

return (<>
    <div className="flex flex-col">

        <span className="text-5xl my-2">Listado de Pokemons <small>Estático</small></span>
        <PokemonGrid pokemons={ pokemons } />
       
    </div>
</>)}

