import React from 'react'

const NavBar = ({ cartCount, pageChange }) => (
  <nav>
    <ul>
      <li>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            pageChange('store')
          }}
        >
          Store
        </a>
      </li>
      <li className="cart-count">
        <a
          href="/cart"
          onClick={(e) => {
            e.preventDefault()
            pageChange('cart')
          }}
        >
          <span role="img" aria-label="items in cart">
            🛒
          </span>
          {cartCount === 0 ? 'Empty' : cartCount}
        </a>
      </li>
    </ul>
  </nav>
)

export default NavBar
