import "../styles/PlantItem.css"
import CareScale from './CareScale'

function PlantItem({ name, cover, light, water, price }) {
    return (
        <li className="lmj-plant-item">
            <img src={cover} alt ={`${name} cover`} className="lmj-plant-item-cover"/>
            {name} <br/> {price}€
            <CareScale scaleValue={light} careType='light'/>
            <CareScale scaleValue={water} careType='water'/>
        </li>
    )
}

export default PlantItem