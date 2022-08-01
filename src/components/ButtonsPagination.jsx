import React from 'react'
import iconoRight from "../assets/images/der.png";
import iconoLeft from "../assets/images/iz.png";


export const ButtonsPagination = ({ page, setPage, total }) => {

  const buttonBack = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  }

  const buttonNext = () => {
    const nextPage = Math.max(page + 1, total);
    setPage(nextPage);
  }

  return (
    <>
      <div className="group-buttons">
        <button onClick={buttonBack} className='btn-pagination'> <img className='icono-izq' src={iconoLeft} alt="" /> Atras</button>
        <button onClick={buttonNext} className='btn-pagination'>Siguiente <img className='icono-der' src={iconoRight} alt="" /> </button>
      </div>
    </>
  )
}
