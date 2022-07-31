import React from 'react'

export const getPokemonName = async (namePokemon) => {

    // https://pokeapi.co/api/v2/pokemon/ditto
    //const namePokemon = "pikachu";
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        return data;

    } catch (err) {
        alert("No se encontro el pokemon");
    }
}
