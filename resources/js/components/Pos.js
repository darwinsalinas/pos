import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Impuestos from './Impuestos/Impuestos';

export default class Pos extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                                <Impuestos />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('appimpuestos')) {
    ReactDOM.render(<Pos />, document.getElementById('appimpuestos'));
}
