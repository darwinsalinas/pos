import React from 'react'
import AmbitoImpuestoList from './AmbitoImpuestoList'
import CalculoImpuestoList from './CalculoImpuestoList';

export default function ImpuestosForm({ titulo }) {
    return (
        <div className="card">
            <div className="card-header">
                {titulo ? titulo : 'Formulario de impuestos'}
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="">Nombre del impuesto</label>
                    <input type="text" name="nombre" className="form-control" placeholder="Nombre del impuesto" />
                </div>

                <AmbitoImpuestoList etiqueta="Ámbito del impuesto" name="ambito_impuesto_id" />
                <CalculoImpuestoList etiqueta="Cálculo del impuesto" name="calculo_impuesto_id" />

                <div className="form-group">
                    <label htmlFor="">Importe</label>
                    <input type="number" name="importe" className="form-control" placeholder="Importe" />
                </div>

                <div className="form-group">
                    <label htmlFor="">Etiqueta en facturas</label>
                    <input type="text" name="etiqueta" className="form-control" placeholder="Etiqueta en facturas" />
                </div>
            </div>
        </div>
    )
}
