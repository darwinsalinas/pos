import React from 'react'

export default function Boton({ texto, tipo, accion, icono }) {

    let tipBoton = tipo ? tipo : 'primary'

    return (
        <button
            onClick={accion}
            className={`btn btn-${tipBoton}`}
        >
            { icono ? <i className={`fas ${icono}`}></i> : null }
            { texto ? ` ${texto}` : ' Click' }
        </button>
    )
}
