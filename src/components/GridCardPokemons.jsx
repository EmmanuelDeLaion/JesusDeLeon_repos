import React from 'react'
import { ButtonsPagination } from './ButtonsPagination'
import { CardPokemon } from './CardPokemon'

export const GridCardPokemons = () => {
  return (
    <>
      <div className="grid-layout-card">

        <CardPokemon></CardPokemon>

      </div>

      <ButtonsPagination></ButtonsPagination>

    </>
  )
}
