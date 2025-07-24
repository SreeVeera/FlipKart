import React from 'react'

const ElectronicProduct = (props) => {
  return (
  <div onClick={props.onClick} style={{ cursor: props.onClick ? 'pointer' : 'default' }}>
    <img src={props.img} alt={props.alt} width="100px" height="100px" />
    <h2>{props.name}</h2>
  </div>
  )
}

export default ElectronicProduct
