import React, { useState, useEffect } from 'react'
import TablaProductos from './TablaProductos';
import Loading from '../comunes/Loading';

export default function Productos() {
    const [lista, setLista] = useState([])
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

    const loadData = () => {
        let url = `/productos`
        axios.get(url)
            .then(resp => { setLista(resp.data.data) })
            .catch(err => { console.log(err.response.data.message) })
    }

    const toggleModal = () => {
        setShowModalForm(!showModalForm)
    }

    useEffect(loadData, [])
    return (
        <div className="row">
            <div className="col-sm-12">
                {
                    lista.length
                        ? <TablaProductos
                            lista={lista}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                        : <Loading />
                }
            </div>
        </div>
    )
}
