import React, { Component } from 'react'
import "./style.scss"

export default class Page2 extends Component {
    state = {
        test_scope: "100",
        dummy_values: [
            {
                name: "Injam Snehith",
                psi: "2221"
            },
            {
                name: "Uday",
                psi: "2226"
            },
            {
                name: "Chandana",
                psi: "2223"
            },
            {
                name: "Sandesh",
                psi: "2225"
            },
        ]
    }
    test_func(param1, event) {
        console.log(param1, event.target.value)
        alert(JSON.stringify(this.state))
    }


    test4_func() {
        alert(JSON.stringify(this.state))
    }

    test2_func = () => {
        alert(JSON.stringify(this.state))
    }

    render() {
        return (
            <div className="page2">
                <h1>Page2</h1>
                <a href="">Open page1</a>
                <input type="button" value="test works" onClick={this.test_func.bind(this, 500)} /><br />
                <input type="button" value="test2 not work" onClick={this.test4_func} /><br />
                <input type="button" value="test3 work" onClick={this.test2_func} /><br />


                <h2>Check html update on state value change</h2>

                <input type="text" onChange={(e) => {
                    let dummy_values = this.state.dummy_values
                    dummy_values[0].name = e.target.value
                    this.setState({ dummy_values: dummy_values })
                }} />


                <h2>Tutorial group</h2>

                <table>
                    <tr>
                        <th>Name</th>
                        <th>PSI</th>
                    </tr>

                    {
                        this.state.dummy_values.map(dummy_value => {
                            return <tr>
                                <td>{dummy_value.name}</td>
                                <td>{dummy_value.psi}</td>
                            </tr>
                        })
                    }

                </table>

            </div>
        )
    }
}