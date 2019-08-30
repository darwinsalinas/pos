import React from 'react'

export default function TablaImpuestosItem({nombre, ambito, calculo, importe, etiqueta}) {
    return (
        <tr>
            <td>{nombre}</td>
            <td>{ambito}</td>
            <td>{calculo}</td>
            <td>{importe}</td>
            <td>{etiqueta}</td>
            <td>
                <div className="btn-group btn-group-sm" role="group" aria-label="">
                    <button type="button" className="btn btn-secondary">
                        <i className="fa fa-eye"></i>
                    </button>
                    <button type="button" className="btn btn-secondary">
                        <i className="fa fa-pencil-alt"></i>
                    </button>
                    <button type="button" className="btn btn-danger">
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}
