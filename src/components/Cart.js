import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce((iResult, { price, quantity }) => {
		return iResult + (price * quantity)
	}, 0)
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])
	
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul className="lmj-cart-ul">
						{cart.map(({ name, price, quantity }, iIndex) => (
							<div key={`${name}-${iIndex}`}>
								{name} {quantity} x {price}€
							</div>
						))}
					</ul>
					<h3>Total: {total}€</h3>
					<button onClick={() => { updateCart([]) }}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart