
export const getPokemonName = async (namePokemon) => {
    try {
        // https://pokeapi.co/api/v2/pokemon/ditto
        const url = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        alert("No se encontro el pokemon");
    }

}
