import React,{useState} from "react"
import Monto from "./Monto"
import Plazo from "./Plazo"
import Cuota from "./Cuota"

function Simulador (){
    const [monto,setMonto] = useState(5000)
    const [plazo,setPlazo] = useState(3)

    return (
        <div className="simulador-container">
            <h1>Simulá tu crédito</h1>
            <Monto monto={monto} setMonto={setMonto}/>
            <Plazo plazo={plazo} setPlazo={setPlazo} />          
            <Cuota monto={monto} plazo ={plazo}/>
        </div>
    )
}

export default Simulador