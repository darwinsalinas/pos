import React, {useState, useEffect} from 'react'

export default function ListTipoProducto({ handleChange, etiqueta, name, selected }) {
    const [list, setList] = useState([])
    const getList = () => {
        let url = '/tipos-productos'
        axios.get(url)
            .then(resp => {
                setList(resp.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleChangeEvent = (e) => {
        if (handleChange) {
            handleChange(e)
        } else {
            console.info('no se ha definido una funcion manejadora del evento change')
        }
    }
    useEffect(getList, [])


    return (
        <div className="form-group">
            <label htmlFor="">{etiqueta ? etiqueta : 'Seleccione:'}</label>
            <select onChange={handleChangeEvent} className="form-control" name={name ? name : ''} value={selected}>
                <option value={0}>Seleccione una opción de la lista</option>
                {
                    list.map(item => <option key={item.id} value={item.id} >{item.nombre}</option>)
                }
            </select>
        </div>
    )
}
