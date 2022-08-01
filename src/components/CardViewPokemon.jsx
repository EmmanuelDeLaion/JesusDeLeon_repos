import React, { useEffect, useState } from 'react'

export const CardViewPokemon = ({ pokemonDataSelected }) => {
 

  return (
    <>
      <div className="card-colum-view">

        <div className="card-pokemon-view">

          <div className="container-img-pokemon-view">
            {
              Object.entries(pokemonDataSelected).length === 0
                ? <img className='card-img-pokemon-view' src="https://assets.puzzlefactory.pl/puzzle/254/191/original.webp" alt="" />
                : <img className='card-img-pokemon-view' src={pokemonDataSelected.sprites.front_default} alt="" />
            }


          </div>

          {
            Object.entries(pokemonDataSelected).length === 0
              ? <h3 className='number-card-pokemon'>#25</h3>
              : <h3 className='number-card-pokemon'>#{pokemonDataSelected.id}</h3>
          }


          {
            Object.entries(pokemonDataSelected).length === 0
              ? <h3 className='title-card-pokemon'>Pikachu</h3>
              : <h3 className='title-card-pokemon'>{pokemonDataSelected.name}</h3>
          }



          <h3 className='titles-desc'>Types</h3>
          {
            Object.entries(pokemonDataSelected).length === 0
              ? <p >types</p>
              : pokemonDataSelected.types.map((type) => {
                return <span key={type.slot}> {type.type.name}. </span>
              })
          }


          <h3 className='titles-desc'>Peso</h3>
          {
            Object.entries(pokemonDataSelected).length === 0
              ? <p >11</p>
              : <p>{pokemonDataSelected.weight}</p>
          }



          <h3 className='titles-desc'>Sprites</h3>
          <div className="sprites">
            {
              Object.entries(pokemonDataSelected).length === 0
                ? <img className='img-sprites' src="https://assets.puzzlefactory.pl/puzzle/254/191/original.webp" alt="" />
                : <div>
                  <img className='img-sprites' src={pokemonDataSelected.sprites.back_default} alt="" />
                  <img className='img-sprites' src={pokemonDataSelected.sprites.back_shiny} alt="" />
                  <img className='img-sprites' src={pokemonDataSelected.sprites.front_default} alt="" />
                  <img className='img-sprites' src={pokemonDataSelected.sprites.front_shiny} alt="" />
                </div>
            }
          </div>

          <h3 className='titles-desc'>Movimientos</h3>
          {
            Object.entries(pokemonDataSelected).length === 0
              ? <p >mega-punch. thunder-punch. slam. double-kick </p>
              : pokemonDataSelected.moves.slice(0, 5).map((move) => {
                return <span key={move.move.name}> {move.move.name}. </span>
              })
          }

        </div>
      </div>
    </>
  )
}
