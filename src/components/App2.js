import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "Guilherme",
            sobrenome: "Rocha"
        }
    }
    render() {
        return (
            <div>
                <h4>{this.state.nome} {this.state.sobrenome}</h4>
            </div>
        );
    }
}