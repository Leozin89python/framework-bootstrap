import React, {Component} from 'react'
import firebase from '../Db/db'

import './table.css'

export default class Table extends Component{
    constructor(props){
        super(props)

        this.state = {
          valores: []
        }

    }

    lista = () =>{
        firebase.database().ref('client').on('value', (snapshot)    =>{
            let valores = this.state
            valores.valores = []

            snapshot.forEach((dados)=>{
              valores.valores.push({
                    name:dados.val().name,
                    msg:dados.val().msg
                }) 
            })
            this.setState(valores)
        })
    }

    componentDidMount = () =>{
        this.lista()
    }

  
    render(){
        
        return(
            <div className="table-bootstrap">
                <h1>Table</h1>

                <table className="tab" border="2px">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.valores.map((e,index)=>{
                                return(
                                    <tr key={index}>
                                        <th>{e.name}</th>
                                        <th>{e.msg}</th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <div className="copy-table">
                    <p>&copy; react-bootstrap and all rights reserved.</p>
                </div>
            </div>
        )
    }
}