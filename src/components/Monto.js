import React from "react"
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

function Monto ({monto,setMonto}){
    return (
        <>
            <div className="titulo">
                <p>MONTO TOTAL</p>
                <input type="text" value={`$ ${monto}`} />
            </div>
            <Slider min={5000} max={50000} step={500} onChange={(e)=>setMonto(e)}/>
            <div className="numeros">
                <p>$5.000</p>
                <p>$50.000</p>
            </div>
        </>
    )
  
}

export default Monto