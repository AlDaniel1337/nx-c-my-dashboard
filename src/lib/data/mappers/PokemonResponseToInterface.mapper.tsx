import { PokemonEntity, PokemonImages, TypeEntity } from '../entities/PokemonEntity';
import { PokemonResponse, Type } from '../interfaces/PokemonResponse';

export const PokemonResponseToInterface = async ( pokemonRepsonse: PokemonResponse )
: Promise<PokemonEntity> => {
    return { 
        id:   `${pokemonRepsonse.id}`,
        name: pokemonRepsonse.name,
        mainImage: pokemonRepsonse.sprites.other?.dream_world.front_default ?? '',
        moves: pokemonRepsonse.moves.map( move => move.move.name ),
        types: pokemonRepsonse.types.map( type => getType(type) ),
        weight: pokemonRepsonse.weight.toString(),
        pokemonImages: getImages( pokemonRepsonse ),
    }
}

const getType = ( types: Type ): TypeEntity => ({
    type: types.type.name,
    slot: types.slot
});

const getImages = ( pokemonRepsonse: PokemonResponse ): PokemonImages => ({
    front_default: pokemonRepsonse.sprites.front_default ?? "",
    back_default: pokemonRepsonse.sprites.back_default,
    front_shiny: pokemonRepsonse.sprites.front_shiny,
    back_shiny: pokemonRepsonse.sprites.back_shiny,
});
