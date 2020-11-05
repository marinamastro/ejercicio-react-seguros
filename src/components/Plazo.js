import React from "react"
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

function Plazo ({plazo,setPlazo}) {
    return (
    <>
        <div className="titulo">
            <p>PLAZO</p>
            <input type="text" value={plazo}/>
        </div>
        <Slider min={3} max={24} onChange={(e)=>setPlazo(e)}/>
        <div className="numeros">
            <p>3</p>
            <p>24</p>
        </div>
    </>
    )}

export default Plazo