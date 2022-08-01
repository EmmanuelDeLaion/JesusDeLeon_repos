import React, { useEffect, useState } from 'react'
import { getPokemonData } from '../helpers/getPokemonData';
import { getPokemons } from '../helpers/getPokemons'
import { ButtonsPagination } from './ButtonsPagination';
import { CardPokemon } from './CardPokemon'

export const GridCardPokemons = ({getPokemonViewPokedex}) => {

  const [pokemons, setPokemons] = useState([]);

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
 


  const getPokemonsGrid = async (limit, offset) => {
    try {
      const totalPokemons = await getPokemons(4,4 * page);
      const promises = totalPokemons.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setTotal(Math.ceil(data.count / 4)); 
    }
    catch (err) {
      console.log(err);
    } 
  }
 

  useEffect(() => {
    getPokemonsGrid();
  }, [page]);


  const getPokemonViewGrid = (name) => {
    //console.log(name);
    getPokemonViewPokedex(name);
  }


  return (
    <>
      <div className="grid-layout-card">
        {
          pokemons.map((pokemon, idx) => {
            return (
              <CardPokemon 
                getPokemonViewGrid={(name)=>getPokemonViewGrid(name)} 
                key={idx} 
                pokemon={pokemon} >
              </CardPokemon>
            )
          })
        }

      </div>

      <ButtonsPagination 
        page={page} 
        total={total} 
        setPage={setPage} 
        getPokemonsGrid={(limit,offset)=> getPokemonsGrid(limit,offset)}
        >
        </ButtonsPagination>

    </>
  )
}
