import React, { useState } from 'react'
import iconoSearch from "../assets/images/icono-search.png";
import { getPokemonName } from '../helpers/getPokemonName';

export const SearchPokemon = () => {

    const [inputValue, setInputValue] = useState("");
    const [pokemon, setPokemon] = useState()

    const onInputChange = (event) => {
        setInputValue(event.target.value);
        console.log(event.target.value);
    }

    const searchPokemon = () => {
        getPokemonName(inputValue);
    }

    return (
        <>
            <button onClick={searchPokemon} className='btn-search'>
                <img className='icono-search' src={iconoSearch} alt="" />
            </button>
            <input
                type="text"
                placeholder='Buscar'
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </>
    )
}
