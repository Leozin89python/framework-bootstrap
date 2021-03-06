import React, {Component} from 'react'
import firebase from '../Db/db'

import './table.css'

export default class Table extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:'',
            msg:''
        }

        firebase.database()
                .ref('client')
                .child('clients')
                .on('value',(snapshot)=>{
               
            let state   = this.state
            state.name  = snapshot.val().name
            this.setState(state)
        })

        firebase.database()
                .ref('client')
                .child('clients')
                .on('value',(snapshot)=>{

            let state = this.state
            state.msg = snapshot.val().msg
            this.setState(state)
        })
    }

    render(){
        const {name, msg} = this.state

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
                        <tr>
                            <th>{name}</th>
                            <th> {msg}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}