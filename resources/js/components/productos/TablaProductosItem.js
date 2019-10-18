import React from 'react'
import Boton from '../comunes/Boton'
import Button from '../comunes/Button'

export default function TablaProductosItem({
    id,
    nombre,
    costo,
    precio_venta,
    tipo_producto,
    categoria_producto,
    disponible,
    handleEdit,
    handleDelete
}) {

    return (
        <tr>
            <td>{nombre}</td>
            <td>{costo}</td>
            <td>{precio_venta}</td>
            <td>{tipo_producto.nombre}</td>
            <td>{categoria_producto.nombre}</td>
            <td>
                {
                    disponible
                    ? <i className="fas fa-circle text-success"></i>
                    : <i className="fas fa-circle text-danger"></i>
                }
            </td>
            <td>
                <div className="btn-group btn-group-sm" role="group" aria-label="">
                    <button type="button" className="btn btn-secondary">
                        <i className="fa fa-eye"></i>
                    </button>
                    <Button icono="pencil-alt" tipo="secondary" accion={() => handleEdit(id)} />
                    <button onClick={() => handleDelete(id)} type="button" className="btn btn-danger">
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}
