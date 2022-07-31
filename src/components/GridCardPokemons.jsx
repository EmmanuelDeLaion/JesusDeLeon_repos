import React, { useEffect } from 'react'
import { getPokemons } from '../helpers/getPokemons'
import { ButtonsPagination } from './ButtonsPagination'
import { CardPokemon } from './CardPokemon'

export const GridCardPokemons = () => {

  const getPokemonsGrid = async ( ) => {
    try {
      const totalPokemons = await getPokemons();
      console.log(totalPokemons.results);
    }
    catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    getPokemonsGrid();
  }, []);


  return (
    <>
      <div className="grid-layout-card">

        <CardPokemon>
        </CardPokemon>

      </div>

      <ButtonsPagination></ButtonsPagination>

    </>
  )
}
