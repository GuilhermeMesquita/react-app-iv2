import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemsQuantity: 1,
            newItemName: "",
            items: [
                {
                    id: "1",
                    taskName: "Acordar",
                    status: "false"
                }
            ]
        }
    }

    renderItems() {
        let actualStates = this.state.items;
        return actualStates.map((index) => {
            return (
                <tr>
                    <td>{index.id}</td>
                    <td>{index.taskName}</td>
                    <td>{index.status}</td>
                </tr>
            )
        });
    }

    changeName(event) {
        this.setState({
            newItemName: event.target.value
        });
    }

    addNewItem() {
        console.log("addNewItem - insert");
        let actualItems = this.state.items;
        let lastIndex = parseInt(actualItems.length) - 1;
        let lastItemCode = parseInt(actualItems[lastIndex].id) + 1;

        let newItem = {
            id: lastItemCode,
            taskName: this.state.newItemName,
            status: "false"
        }

        actualItems.push(newItem);

        this.setState({
            itemsQuantity: parseInt(this.state.itemsQuantity) + 1,
            items: actualItems
        })
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderItems()}
                    </tbody>
                </table>
                <div>
                    <input value={this.state.newItemName} onChange={(event) => { this.changeName(event) }}></input>
                    <button onClick={(event) => { this.addNewItem(event) }}>Inserir</button>
                </div>
            </div >
        )
    }
}


