import React from 'react'

const ElectronicProduct = (props) => {
  return (
  <div className="Electronicpro" onClick={props.onClick} style={{ cursor: props.onClick ? 'pointer' : 'default' }}>
    <img className="productimage" src={props.img} alt={props.alt} width="100px" height="100px" />
    <h2 className="proname">{props.name}</h2>
  </div>
  )
}

export default ElectronicProduct
