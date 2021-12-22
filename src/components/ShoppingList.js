/**
 * @module  ShoppingList
 */
import { plantList } from "../data/plantList"
import { useState } from "react"
import "../styles/ShoppingList.css"
import PlantItem from "./PlantItem"
import Categories from "./Categories"

/**
 * @name        ShoppingList
 * @description Buyable items list
 * @param       {*} cart 
 * @param       {*} updateCart 
 * @returns 
 */
function ShoppingList({ cart, updateCart }) {
    const [selectedCategory, updateSelectedCategory] = useState('')
    const categList = plantList.reduce((aRes, oPlant) => {
        if (aRes.indexOf(oPlant.category) < 0) {
            aRes.push(oPlant.category)
        }
        return aRes
    }, [])
    const aFilteredPlantList = selectedCategory !== '' ? plantList.filter((oPlant) => {
        return oPlant.category === selectedCategory
    }) : plantList
    /**
     * 
     * @param {*} sName 
     */
    function handleClick(name, price) {
        const oCurrentPlantAdded = cart.find((oPlant) => oPlant.name === name)
        if (!oCurrentPlantAdded) {
            updateCart([...cart, { name, price, quantity: 1 }])
        } else {
            const cartFiltered = cart.filter((oPlant) => oPlant.name !== name)
            updateCart([...cartFiltered, { name, price, quantity: oCurrentPlantAdded.quantity + 1 }])
        }
    }
    return (
        <div>
            <Categories categories={categList} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory} />
            <ul className="lmj-plant-list">
                {aFilteredPlantList.map(({ name, cover, id, light, water, price }) => {
                    return (
                        <div key={id}>
                            <PlantItem name={name} cover={cover} light={light} water={water} price={price} />
                            <button onClick={(e) => { e.stopPropagation(); handleClick(name, price) }}>Ajouter</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default ShoppingList