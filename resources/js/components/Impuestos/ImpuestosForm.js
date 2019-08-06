import React, { useState } from 'react'
import AmbitoImpuestoList from './AmbitoImpuestoList'
import CalculoImpuestoList from './CalculoImpuestoList';

export default function ImpuestosForm({ titulo }) {

    const [form, setForm] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        const url = '/impuestos'
        axios.post(url, form)
            .then(resp => {
                console.log('completado')
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="card">
            <div className="card-header">
                {titulo ? titulo : 'Formulario de impuestos'}
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="">Nombre del impuesto</label>
                        <input onChange={handleChange} type="text" name="nombre" className="form-control" placeholder="Nombre del impuesto" />
                    </div>

                    <AmbitoImpuestoList
                        etiqueta="Ámbito del impuesto"
                        name="ambito_impuesto_id"
                        handleChange={handleChange}
                    />
                    <CalculoImpuestoList
                        etiqueta="Cálculo del impuesto"
                        name="calculo_impuesto_id"
                        handleChange={handleChange}
                    />

                    <div className="form-group">
                        <label htmlFor="">Importe</label>
                        <input onChange={handleChange} type="number" name="importe" className="form-control" placeholder="Importe" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Etiqueta en facturas</label>
                        <input onChange={handleChange} type="text" name="etiqueta" className="form-control" placeholder="Etiqueta en facturas" />
                    </div>


                    <button type="submit" className="btn btn-primary">Guardar</button>

                </form>
            </div>
        </div>
    )
}
