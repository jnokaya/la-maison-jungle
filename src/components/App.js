import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import { useEffect, useState } from 'react'
import '../styles/Layout.css'

function App() {
	let savedCart = JSON.parse(localStorage.getItem('cart'))
	savedCart = savedCart && Array.isArray(savedCart) && savedCart.length > 0 ? savedCart : []
	const [cart, updateCart] = useState(savedCart)
	useEffect(()=>{
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart}/>
				<ShoppingList cart={cart} updateCart={updateCart}/>
			</div>
			<Footer />
		</div>
	)
}

export default App