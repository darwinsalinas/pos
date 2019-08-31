import React, {useState, useEffect} from 'react'
import ImpuestosForm from './ImpuestosForm';
import TablaImpuestos from './TablaImpuestos';


export default function Impuestos() {

    const [showModalForm, setShowModalForm] = useState(false)
    const [currentItem, setCurrentItem] = useState(null)
    const [impuestos, setImpuestos] = useState([])
    const [form, setForm] = useState({
        nombre: '',
        importe: 0,
        etiqueta: '',
        ambito_impuesto_id: '',
        calculo_impuesto_id: '',
        ambito: null,
        calculo: null
    })


    const loadDataSingle = () => {
        if (currentItem) {
            let url = `impuestos/${currentItem}`
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

    const hadleEdit = (id) => {
        setShowModalForm(true)
        setCurrentItem(id)
        console.log('editar', id)
    }

    const handleDelete = (id) => {
        let url = `/impuestos/${id}`
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
        let url = '/impuestos'
        let method = 'POST'
        if (currentItem) {
            method = 'PATCH'
            url = `/impuestos/${currentItem}`
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
        let url = `/impuestos`
        axios.get(url)
        .then(resp => {setImpuestos(resp.data.data)})
        .catch(err => {console.log(err.response.data.message)})
    }

    const toggleModal = () => {
        setShowModalForm(!showModalForm)
    }

    useEffect(loadData, [])

    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <TablaImpuestos handleAdd={handleAdd} hadleEdit={hadleEdit} lista={impuestos} handleDelete={handleDelete}/>
                    {
                        showModalForm && <ImpuestosForm id={currentItem} toggleModal={toggleModal} handleSubmit={handleSubmit} handleChange={handleChange} form={form}/>
                    }
                </div>
            </div>
        </div>
    )
}
