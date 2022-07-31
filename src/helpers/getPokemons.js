import React from 'react'

export const getPokemons = async () => {

    const limit = 4;
    const offset = 0;

    try {
        // https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log("No hay pokemones");
    }
}