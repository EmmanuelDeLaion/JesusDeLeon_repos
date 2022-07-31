import React from 'react'
import { SearchPokemon } from './components/SearchPokemon'
import { TitleApp } from './components/TitleApp'

export const PokedexApp = () => {
  return (
    <>
        <TitleApp></TitleApp>
        <SearchPokemon></SearchPokemon>
    </>
  )
}
