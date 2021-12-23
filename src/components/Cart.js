import { useState, useEffect } from 'react'
import '../styles/Cart.css'


function Cart({ cart, updateCart, isEdit, setIsEdit }) {
	const [isOpen, setIsOpen] = useState(true)
	let tempCart = cart
	const total = cart.reduce((iResult, { price, quantity }) => {
		return iResult + (price * quantity)
	}, 0)
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])
	function handleChangeQuantity(sName, iQuantity){
		let oPlant = cart.find(({name})=> name === sName)
		if(!oPlant) throw new Error()
		const filteredCart = cart.filter(({name})=> name !== sName)
		oPlant.quantity = iQuantity
		tempCart = [...filteredCart, oPlant]
	}
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? isEdit ? (
				<div>
					<h2>Panier</h2>
					<ul className="lmj-cart-ul">
						{cart.map(({ name, price, quantity }, iIndex) => (
							<div key={`${name}-${iIndex}`}>
								{name}
								<input type="number" name={name} defaultValue={quantity} onChange={(e)=>handleChangeQuantity(name, e.target.value)} />
								x {price}€
							</div>
						))}
					</ul>
					<h3>Total: {total}€</h3>
					<button onClick={() => { setIsEdit(false); updateCart([...tempCart]) }}>Confirmer les modifications</button>
					<button onClick={() => { updateCart([]) }}>Vider le panier</button>
				</div>
			) : (
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
					<button onClick={() => { setIsEdit(true) }}>Editer le panier</button>
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