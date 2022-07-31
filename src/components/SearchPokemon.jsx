import React from 'react'
import iconoSearch from "../assets/images/icono-search.png";

export const SearchPokemon = () => {
    return (
        <>
            <button className='btn-search'>
                <img className='icono-search' src={iconoSearch} alt="" />
            </button>
            <input
                type="text"
                placeholder='Buscar'  
            />
        </>
    )
}
