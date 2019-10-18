import React, {useState} from 'react'
import ListTipoProducto from './ListTipoProducto'

export default function BuscadorProductos({handleSubmitBuscador, handleChangebuscador, disponible, setShowBuscadorForm}) {
    return (
        <form onSubmit={(e) => handleSubmitBuscador(e)}>

                <div className="form-group">
                    <label htmlFor="nombre">
                        Nombre
                    </label>
                    <input name="nombre" onChange={(e) => handleChangebuscador(e)} type="text" className="form-control" placeholder="Buscar" />
                </div>

                <div className="form-group">
                    <label htmlFor="costo">Costo</label>
                    <input name="costo" onChange={(e) => handleChangebuscador(e)} type="number" className="form-control" placeholder="Costo" />
                </div>

                <div className="form-group">
                    <label htmlFor="precio">Precio</label>
                    <input name="precio" onChange={(e) => handleChangebuscador(e)} type="number" className="form-control" placeholder="Precio" />
                </div>

                <div className="form-group">
                  <ListTipoProducto
                    etiqueta="Tipo Producto"
                    name="tipo"
                  />
                </div>

                <div className="form-check">
                  <label className="form-check-label">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="disponible"
                        checked={disponible}
                        onChange={(e) => handleChangebuscador(e)}
                    />
                    Disponible
                  </label>
                </div>

                <div className="form-group">
                    <button onClick={() => setShowBuscadorForm(false)} className="btn btn-secondary">Cancelar</button>
                    <button type="submit" className="btn btn-success float-right">Buscar</button>
                </div>
        </form>
    )
}
