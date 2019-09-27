import React, { useState, useEffect } from 'react'
import AmbitoImpuestoList from './AmbitoImpuestoList'
import CalculoImpuestoList from './CalculoImpuestoList';

export default function ImpuestosForm({ titulo, id, toggleModal, handleSubmit, form, handleChange }) {
    let styles = { display: "block" }
    let modalStyle = {
        maxHeight: '70vh',
        overflow: 'scroll-y'
    }
    return (

        <div className="modal" style={styles} role="dialog" aria-modal="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{titulo ? titulo : 'Formulario de impuestos'}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" style={modalStyle}>
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
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
