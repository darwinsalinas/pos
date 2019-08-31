import React from 'react'
import TablaImpuestosItem from './TablaImpuestosItem';

export default function TablaImpuestos({hadleEdit, handleDelete, handleAdd, lista}) {
    const editar = (id) => {
        hadleEdit(id)
    }

    const eliminar = (id) => {
        handleDelete(id)
    }

    const agregar = () => {
        handleAdd()
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Ámbito</th>
                    <th>Cálculo</th>
                    <th>Importe</th>
                    <th>Etiqueta</th>
                    <th>
                        <div className="btn-group btn-group-sm" role="group" aria-label="">
                            <button onClick={agregar} type="button" className="btn btn-primary">
                                <i className="fa fa-plus"></i>   Agregar
                            </button>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    lista.map(item => (
                        <TablaImpuestosItem
                            key={item.id}
                            id={item.id}
                            nombre={item.nombre}
                            ambito={item.ambito.nombre}
                            calculo={item.calculo.nombre}
                            importe={item.importe}
                            etiqueta={item.etiqueta}
                            hadleEdit={editar}
                            handleDelete={eliminar}
                            handleAdd={agregar}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}
