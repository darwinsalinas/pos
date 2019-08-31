import React, {useState} from 'react'
import ImpuestosForm from './ImpuestosForm';
import TablaImpuestos from './TablaImpuestos';

export default function Impuestos() {

    const [showModalForm, setShowModalForm] = useState(false)
    const [currentItem, setCurrentItem] = useState(null)

    const hadleEdit = (id) => {
        setShowModalForm(true)
        setCurrentItem(id)
        console.log('editar', id)
    }

    const toggleModal = () => {
        setShowModalForm(!showModalForm)
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <TablaImpuestos hadleEdit={hadleEdit}/>
                    {
                        showModalForm && <ImpuestosForm id={currentItem} toggleModal={toggleModal}/>
                    }
                </div>
            </div>
        </div>
    )
}
