import React, { useState, useEffect } from 'react'
import TablaProductos from './TablaProductos';
import Loading from '../comunes/Loading';
import Loader from '../comunes/Loader';
import ImpuestosForm from '../Impuestos/ImpuestosForm'
import BuscadorProductos from './BuscadorProductos';

export default function Productos() {
    const [lista, setLista] = useState({data:[]})
    const [loading, setLoading] = useState(true)
    const [showModalForm, setShowModalForm] = useState(false)
    const [currentItem, setCurrentItem] = useState(null)
    const [form, setForm] = useState({
        nombre: '',
        disponible: false,
        costo: 0,
        precio_venta: '',
        tipo_producto_id: '',
        categoria_producto_id: '',
        tipo_producto: null,
        categoria_producto: null
    })
    const [formBuscador, setFormBuscador] = useState({
        nombre: '',
        costo: '',
        precio: '',
        disponible: true
    })


    const loadDataSingle = () => {
        if (currentItem) {
            let url = `productos/${currentItem}`
            axios.get(url)
                .then(resp => {
                    setForm({ ...resp.data.data })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    useEffect(loadDataSingle, [currentItem])

    const handleEdit = (id) => {
        setShowModalForm(true)
        setCurrentItem(id)
        console.log('editar', id)
    }

    const handleDelete = (id) => {
        let url = `/productos/${id}`
        axios.delete(url)
            .then(resp => {
                loadData()
            })
            .catch(err => {
                console.log(err.response.data.message)
            })
    }

    const handleAdd = () => {
        setCurrentItem(null)
        setShowModalForm(true)
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleChangebuscador = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        console.log(value)
        setFormBuscador({
            ...formBuscador,
            [e.target.name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let url = '/productos'
        let method = 'POST'
        if (currentItem) {
            method = 'PATCH'
            url = `/productos/${currentItem}`
        }
        axios({
            method: method, url: url, data: form
        })
            .then(resp => {
                console.log('completado')
                loadData()
                setShowModalForm(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const loadData = (url='/productos') => {
        if(!url) {
           return
        }

        //let url = `/productos`
        axios.get(url)
            .then(resp => {
                setLoading(false)
                setLista(resp.data.data)
            })
            .catch(err => {
                setLoading(false)
                console.log(err.response.data.message)
            })
    }

    const toggleModal = () => {
        setShowModalForm(!showModalForm)
    }

    const handleSubmitBuscador = (e) => {
        setLoading(true)
        e.preventDefault()
        let url = '/productos'
        axios.get(url, {
            params: formBuscador
        })
        .then(resp => {
            setLoading(false)
            setLista(resp.data.data)
        })
        .catch(err => {
            setLoading(false)
            alert('error')
        })
    }

    useEffect(loadData, [])
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="container">
                    <BuscadorProductos
                        disponible={formBuscador.disponible}
                        handleSubmitBuscador={handleSubmitBuscador}
                        handleChangebuscador={handleChangebuscador}
                    />
                </div>
            </div>
            <div className="col-sm-12" >
                {
                    loading
                    ? <Loader />
                    : <TablaProductos
                            lista={lista.data}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                }
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <button onClick={() => loadData(lista.prev_page_url)} className="page-link">Anterior</button>
                        </li>
                        <li className="page-item">
                        <button onClick={() => loadData(lista.next_page_url)} className="page-link">Siguiente</button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col-sm-12">
                <div className="container">
                    <BuscadorProductos
                        handleSubmitBuscador={handleSubmitBuscador}
                        handleChangebuscador={handleChangebuscador}
                    />
                </div>
            </div>
        </div>
    )
}
