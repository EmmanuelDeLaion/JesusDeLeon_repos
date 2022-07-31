import React from 'react'
import { CardViewPokemon } from './components/CardViewPokemon'
import { GridCardPokemons } from './components/GridCardPokemons'
import { Navbar } from './components/Navbar'
import { SearchPokemon } from './components/SearchPokemon'
import { TitleApp } from './components/TitleApp'

export const PokedexApp = () => {
  return (
    <>
        <Navbar></Navbar>
        
        <TitleApp></TitleApp> 

        <div className="container-search">
            <div className="input-search">
                <div className="search">
                    <SearchPokemon></SearchPokemon>
                </div>
            </div>
        </div>

        <div className="grid-layout">
            <div className="grid-card">
                <GridCardPokemons></GridCardPokemons>
            </div>

            <div className="grid-card">
                <CardViewPokemon></CardViewPokemon>
            </div>
        </div>

    </>
  )
}
