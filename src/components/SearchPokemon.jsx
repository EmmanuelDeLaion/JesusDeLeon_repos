import React, { useState } from 'react'
import iconoSearch from "../assets/images/icono-search.png";

import { getPokemonName } from '../helpers/getPokemonName';

export const SearchPokemon = ({ getNameSearch }) => {

  const [inputValue, setInputValue] = useState("");
  const [pokemon, setPokemon] = useState()


  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }


  const searchPokemon = async () => {
    if (inputValue !== "") {
      const pokemonSelected = await getPokemonName(inputValue);
      if (Object.entries(pokemonSelected).length !== 0 || pokemonSelected === undefined) {
        setPokemon(pokemonSelected);
        //console.log(inputValue); 
        getNameSearch(pokemonSelected);
      } else {
        console.log("No se encontro el pokemon");
      }
    }else{
      alert("Ingrese el nombre del pokemon");
    }


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
