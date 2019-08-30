import React, { useState, useEffect } from 'react'
import AmbitoImpuestoList from './AmbitoImpuestoList'
import CalculoImpuestoList from './CalculoImpuestoList';

export default function ImpuestosForm({ titulo, id, toggleModal }) {

    const [form, setForm] = useState({
        nombre: '',
        importe: 0,
        etiqueta: '',
        ambito_impuesto_id: '',
        calculo_impuesto_id: '',
        ambito: null,
        calculo: null
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const url = '/impuestos'
        let method = 'POST'
        if (id) {
            method = 'PATCH'
        }
        axios({
            method: method, url: url, data: form
        })
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

    const loadData = () => {
        let url = `impuestos/${id}`
        axios.get(url)
        .then(resp => {
            setForm({...resp.data.data})
        })
        .catch(err => {
            console.log(err.response.data.message)
        })
    }

    useEffect(loadData, [id])


    return (
        <div className="card">
            <div className="card-header">
                {titulo ? titulo : 'Formulario de impuestos'}
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="">Nombre del impuesto</label>
                        <input onChange={handleChange} value={form.nombre} type="text" name="nombre" className="form-control" placeholder="Nombre del impuesto" />
                    </div>

                    <AmbitoImpuestoList
                        selected={form.ambito_impuesto_id}
                        etiqueta="Ámbito del impuesto"
                        name="ambito_impuesto_id"
                        handleChange={handleChange}
                    />

                    <CalculoImpuestoList
                        selected={form.calculo_impuesto_id}
                        etiqueta="Cálculo del impuesto"
                        name="calculo_impuesto_id"
                        handleChange={e => handleChange(e)}
                    />

                    <div className="form-group">
                        <label htmlFor="">Importe</label>
                        <input onChange={handleChange} value={form.importe} type="number" name="importe" className="form-control" placeholder="Importe" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Etiqueta en facturas</label>
                        <input onChange={handleChange} value={form.etiqueta} type="text" name="etiqueta" className="form-control" placeholder="Etiqueta en facturas" />
                    </div>

                    <button type="submit" className="btn btn-primary">Guardar</button>
                    <button onClick={toggleModal} type="submit" className="btn btn-primary">Cancelar</button>
                </form>
            </div>
        </div>
    )
}
