import React, { useState, useEffect } from 'react'
import TablaImpuestosItem from './TablaImpuestosItem';

export default function TablaImpuestos() {

    const [impuestos, setImpuestos] = useState([])

    const loadData = () => {
        let url = `/impuestos`
        axios.get(url)
        .then(resp => {
            setImpuestos(resp.data.data)
        })
        .catch(err => {
            console.log(err.response.data.message)
        })
    }

    useEffect(loadData, [])

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
                            <button type="button" className="btn btn-primary">
                                <i className="fa fa-plus"></i>   Agregar
                            </button>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    impuestos.map(item => (
                        <TablaImpuestosItem
                            key={item.id}
                            nombre={item.nombre}
                            ambito={item.ambito.nombre}
                            calculo={item.calculo.nombre}
                            importe={item.importe}
                            etiqueta={item.etiqueta}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}
