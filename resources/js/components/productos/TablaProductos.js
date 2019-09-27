import React from 'react'
import TablaProductosItem from './TablaProductosItem';


export default function TablaProductos({ handleEdit, handleDelete, handleAdd, lista }) {
    if(lista.length > 0){
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Costo</th>
                        <th>Precio</th>
                        <th>Tipo</th>
                        <th>Catagoría</th>
                        <th>Disponible</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {

                        lista.map(item => (<TablaProductosItem key={item.id} {...item} handleDelete={handleDelete} handleEdit={handleEdit} />))
                    }
                </tbody>
            </table>
        )
    }
    return 'No hay datos'

}
