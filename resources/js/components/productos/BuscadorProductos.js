import React, {useState} from 'react'
import ListTipoProducto from './ListTipoProducto'

export default function BuscadorProductos({handleSubmitBuscador, handleChangebuscador, disponible}) {
    return (
        <form onSubmit={(e) => handleSubmitBuscador(e)}>
            <div className="form-group row">
                <div className="col-sm-1-12">
                    <input name="nombre" onChange={(e) => handleChangebuscador(e)} type="text" className="form-control" placeholder="Buscar" />
                </div>

                <div className="col-sm-1-12">
                    <input name="costo" onChange={(e) => handleChangebuscador(e)} type="number" className="form-control" placeholder="Costo" />
                </div>

                <div className="col-sm-1-12">
                    <input name="precio" onChange={(e) => handleChangebuscador(e)} type="number" className="form-control" placeholder="Precio" />
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

                <div class="form-group">
                  <ListTipoProducto
                    etiqueta="Tipo Producto"
                    name="tipo"
                  />
                </div>

                <button type="submit">Buscar</button>
            </div>
        </form>
    )
}
