import React, { useState } from 'react'
import { CardViewPokemon } from './components/CardViewPokemon'
import { GridCardPokemons } from './components/GridCardPokemons'
import { Navbar } from './components/Navbar'
import { SearchPokemon } from './components/SearchPokemon'
import { TitleApp } from './components/TitleApp'

export const PokedexApp = () => {

  const [pokemonDataSelected, setPokemonDataSelected] = useState({});

  const getPokemonViewPokedex = (name) => {
    setPokemonDataSelected(name);
  }

  const getNameSearch = (namePokemon) => {
    setPokemonDataSelected(namePokemon);
  }

  return (
    <>
      <Navbar></Navbar>
      <TitleApp></TitleApp>

      <div className="container-search">
        <div className="input-search">
          <div className="search">
            <SearchPokemon
              getNameSearch={(namePokemon) => getNameSearch(namePokemon)}
            >
            </SearchPokemon>
          </div>
        </div>
      </div>

      <div className="grid-layout">

        <div className="grid-card">
          <GridCardPokemons
            getPokemonViewPokedex={(name) => getPokemonViewPokedex(name)}
          >
          </GridCardPokemons>
        </div>

        <div className="grid-card">
          <CardViewPokemon
            pokemonDataSelected={pokemonDataSelected}
          >
          </CardViewPokemon>
        </div>

      </div>

    </>
  )
}
