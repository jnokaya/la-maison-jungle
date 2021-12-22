import Sun from "../assets/sun.svg"
import Water from "../assets/water.svg"

function CareScale({ scaleValue, careType }) {
    const aRange = [1, 2, 3]
    const scaleType = careType === 'light' ? (<img src={Sun} alt='sun-icon' />) : (<img src={Water} alt='water-icon' />)
    function handleClick(scaleValue, careType){
        let sValue = ""
        if(scaleValue <= 1){
            sValue = "peu"
        }else if(scaleValue === 2){
            sValue = "modérement"
        }else{
            sValue = "beaucoup"
        }

        alert(`Cette plante a besoin de ${sValue} ${careType === 'light' ? "de lumière" : "d'eau"}.`)
    }
    return (
        <div onClick={(e)=>{e.stopPropagation(); handleClick(scaleValue, careType);}}>
            {aRange.map((iNumber) => {
                return scaleValue >= iNumber && <span key={iNumber.toString()}>{scaleType}</span>
            })}
        </div>
    )
}

export default CareScale