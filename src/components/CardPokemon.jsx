import React, { useState } from 'react'
import { getPokemonName } from '../helpers/getPokemonName';

export const CardPokemon = ({ pokemon, getPokemonViewGrid }) => {

    const getPokemonView = async (name) => {
        const pokemonSelected = await getPokemonName(name);
        getPokemonViewGrid(pokemonSelected);
    }

    return (
        <>
            <div onClick={() => getPokemonView(pokemon.name)} className="card-colum">
                <div className="card-pokemon">
                    <img className='card-img-pokemon' src={pokemon.sprites.front_default} alt="" />
                    <h3 className=''>#{pokemon.id}</h3>
                    <h3 className='title-card-pokemon'>{pokemon.name}</h3>
                </div>
            </div>
        </>
    )
}
