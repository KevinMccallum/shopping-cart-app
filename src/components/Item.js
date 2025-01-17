import React from 'react'

const Item = ({ item, onAddToCart, children }) => (
  <li className="Item">
    {item.name}
    <span className="price">${item.price}</span>
    {children}
  </li>
)

export default Item
