export interface PokemonEntity {
    id:   string;
    name: string;
    mainImage: string;
    moves: string[];
    types: TypeEntity[];
    weight: string;
    pokemonImages: PokemonImages;
}

export interface TypeEntity {
    slot: number;
    type: string;
}

export interface PokemonImages {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
}