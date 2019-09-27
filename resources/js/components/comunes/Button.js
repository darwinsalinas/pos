import React from 'react'

export default function Button({ texto, tipo, icono, accion }) {
    let tipoBoton = tipo ? `btn btn-${tipo}` : 'btn btn-primary'
    let iconoBoton = icono ? `fa fa-${icono}` : ''
    return (
        <button
            onClick={accion}
            className={tipoBoton}
        >
            <i className={iconoBoton}></i>
            {
                texto ? ' ' + texto : 'Click'
            }
        </button>
    )
}
