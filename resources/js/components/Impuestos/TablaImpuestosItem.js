import React from 'react'

export default function TablaImpuestosItem({
    id,
    nombre,
    ambito,
    calculo,
    importe,
    etiqueta,
    hadleEdit,
    handleDelete
}) {
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
                    <button onClick={() => hadleEdit(id)} type="button" className="btn btn-secondary">
                        <i className="fa fa-pencil-alt"></i>
                    </button>
                    <button onClick={() => handleDelete(id)} type="button" className="btn btn-danger">
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}
