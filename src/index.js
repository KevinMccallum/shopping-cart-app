import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import ItemPage from './components/ItemPage'
import CartPage from './components/CartPage'
import CheckoutPage from './components/CheckoutPage'
import './index.css'

const products = [
  { id: 1, name: 'Phone', price: 299 },
  { id: 2, name: 'Laptop', price: 999 },
  { id: 3, name: 'Headphones', price: 99 },
  { id: 4, name: 'Camera', price: 799 },
]

class App extends React.Component {
  state = {
    activePage: 'store',
    cart: [],
  }

  handleAdd = (item) => {
    this.setState((prev) => ({
      cart: [...prev.cart, item],
    }))
  }

  handlePageChange = (page) => {
    this.setState({
      activePage: page,
    })
  }

  render() {
    const { activePage, cart } = this.state
    return (
      <div className="App">
        <NavBar cartCount={cart.length} pageChange={this.handlePageChange} />
        <main>
          {activePage === 'store' ? (
            <ItemPage items={products} onAddToCart={this.handleAdd} />
          ) : activePage === 'cart' ? (
            <CartPage items={cart} pageChange={this.handlePageChange} />
          ) : (
            <CheckoutPage items={cart} />
          )}
        </main>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
