import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Impuestos from './Impuestos/Impuestos';
import TablaImpuestos from './Impuestos/TablaImpuestos';

export default class Pos extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <TablaImpuestos />
                        <Impuestos />
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('appimpuestos')) {
    ReactDOM.render(<Pos />, document.getElementById('appimpuestos'));
}
