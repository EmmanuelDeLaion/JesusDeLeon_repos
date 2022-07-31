import React from 'react'

export const CardViewPokemon = () => {
    return (
        <>
            <div className="card-colum-view">

                <div className="card-pokemon-view">

                    <div className="container-img-pokemon-view">
                        <img className='card-img-pokemon-view' src="https://assets.puzzlefactory.pl/puzzle/254/191/original.webp" alt="" />
                    </div>


                    <h3 className='number-card-pokemon'>#25</h3>
                    <h3 className='title-card-pokemon'>Pikachu</h3>

                    <h3 className='titles-desc'>Types</h3>
                    <p >types</p>

                    <h3 className='titles-desc'>Peso</h3>
                    <p >11</p>

                    <h3 className='titles-desc'>Sprites</h3>
                    <div className="sprites">
                        <img className='img-sprites' src="https://assets.puzzlefactory.pl/puzzle/254/191/original.webp" alt="" />
                    </div>

                    <h3 className='titles-desc'>Movimientos</h3>


                </div>
            </div>
        </>
    )
}
