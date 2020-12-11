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
      <a
        href="/cart"
        onClick={(e) => {
          e.preventDefault()
          pageChange('cart')
        }}
      >
        <li>
          <span role="img" aria-label="items in cart">
            🛒
          </span>
          {cartCount === 0 ? 'Empty' : cartCount}
        </li>
      </a>
    </ul>
  </nav>
)

export default NavBar
