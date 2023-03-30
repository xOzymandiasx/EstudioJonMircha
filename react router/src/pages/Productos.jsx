import React from 'react'
import { useLocation } from 'react-router-dom'

const Productos = () => {
  let location = useLocation();
  console.log(location);

  return (
    <div>
      <h3>Productos</h3>
      <p>Mostrando productos de <b>1</b> al <b>20</b></p>
      <button>Atras</button>
      <button>Adelante</button>
    </div>
  )
}

export default Productos