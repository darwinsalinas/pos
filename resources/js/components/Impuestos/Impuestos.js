import React from 'react'
import ImpuestosForm from './ImpuestosForm';
import ImpuestoList from './ImpuestoList';

export default function Impuestos() {
    const handleChange = (seleccionados) => {
        console.log(seleccionados)
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <ImpuestoList
                        onChange={handleChange}
                    />
                </div>
            </div>
            <ImpuestosForm />
        </div>
    )
}
