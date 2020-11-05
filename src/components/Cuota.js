import React from "react"

function Cuota ({monto,plazo}){    
    const interes = (2412.91 - (19500/16)) /19500;
    return (
    <>
        <div className="container-cuota">
            <h3>CUOTA FIJA POR  MES</h3>
            <h2 className="cuota">${((monto/plazo)+(monto*interes)).toFixed(2)}</h2>
        </div>
        <div style={{display:"flex"}}>
            <button className="credito">OBTENÉ CRÉDITO</button>
            <button className="detalle">VER DETALLE DE CUOTAS</button>
        </div>
    </>
    )
}

export default Cuota