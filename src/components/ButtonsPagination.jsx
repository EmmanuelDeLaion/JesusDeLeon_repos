import React from 'react'
import iconoRight from "../assets/images/der.png";
import iconoLeft from "../assets/images/iz.png";


export const ButtonsPagination = () => {
    return (
        <>
            <div className="group-buttons">
                <button className='btn-pagination'> <img className='icono-izq' src={iconoLeft} alt="" /> Atras</button>
                <button className='btn-pagination'>Siguiente <img className='icono-der' src={iconoRight} alt="" /> </button>
            </div>
        </>
    )
}
