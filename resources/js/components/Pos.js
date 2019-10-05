import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Impuestos from './Impuestos/Impuestos';
import Productos from './productos/Productos';
import Loader from './comunes/Loader';

export default function Pos() {

    const cardStyles = {
        position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(17px, 17px, 0px)'
    }
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Lista de productos</h6>
                <div className="dropdown no-arrow">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink" x-placement="bottom-end" style={cardStyles}>
                        <div className="dropdown-header">Dropdown Header:</div>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <Productos />
            </div>
        </div>
    );
}

if (document.getElementById('appimpuestos')) {
    ReactDOM.render(<Pos />, document.getElementById('appimpuestos'));
}
