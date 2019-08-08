import React, { useState, useEffect } from 'react'
const ImpuestoList = ({ onChange }) => {

    const [lista, setLista] = useState([])

    const loadData = () => {
        let url = '/impuestos'
        axios.get(url)
            .then(resp => {
                setLista(resp.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = (e) => {
        let seleccionadosSrc = e.target.selectedOptions
        let seleccionados = []
        for (let i = 0; i < seleccionadosSrc.length; i++) {
            seleccionados.push(seleccionadosSrc.item(i).value)
        }
        if (onChange) {
            onChange(seleccionados)
        }
    }

    useEffect(loadData, [])

    return (
        <div>
            <div className="form-group">
                <label htmlFor="impuestos_id">Impuestos</label>
                <select onChange={handleChange} className="form-control" name="impuestos_id" multiple>
                    <option value="0">Selecciones una upción</option>
                    {
                        lista.map(item => (
                            <option value={item.id} key={item.id}>{item.nombre}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default ImpuestoList
