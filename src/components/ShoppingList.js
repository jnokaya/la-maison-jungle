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
    const [selectedCategories, updateSelectedCategories] = useState([])
    const categList = plantList.reduce((aRes, oPlant) => {
        if (aRes.indexOf(oPlant.category) < 0) {
            aRes.push(oPlant.category)
        }
        return aRes
    }, [])
    const aFilteredPlantList = selectedCategories.length > 0 ? plantList.filter((oPlant) => {
        return selectedCategories.indexOf(oPlant.category) >= 0
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
            const iInd = cart.indexOf(oCurrentPlantAdded)
            cart[iInd].quantity++
            updateCart([...cart])
        }
    }
    return (
        <div>
            <Categories categories={categList} selectedCategories={selectedCategories} updateSelectedCategories={updateSelectedCategories} />
            <ul className="lmj-plant-list">
                {aFilteredPlantList.map(({ name, cover, id, light, water, price, category }) => {
                    return (
                        <div key={id}>
                            <PlantItem name={name} cover={cover} light={light} water={water} price={price} category={category} />
                            <button onClick={(e) => { e.stopPropagation(); handleClick(name, price) }}>Ajouter</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default ShoppingList