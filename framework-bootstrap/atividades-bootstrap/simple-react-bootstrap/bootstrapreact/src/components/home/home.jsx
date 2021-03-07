import React, {Component} from 'react'
import './home.css'

import Slider from './carrousel'

import {Card,Form,Button} from 'react-bootstrap'

import firebase from '../Db/db'

export default class Home extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:'',
            msg:''
        }

        this.cadastro =  this.cadastro.bind(this)
    }



    cadastro = (e) => {
        let cadastro = firebase.database()
                               .ref('client');

        let chave = cadastro.push().key;
  
        cadastro.child(chave).set({
          name:this.state.name,
          msg:this.state.msg
        });
  
        this.limpar()
        e.preventDefault();
      }




      limpar = () =>{
          this.setState({
            name:'',
            msg:''
          })
      }



    render(){
        return(
            <div>
                {/**component Slider */}
                <Slider />
                <br />
                <br />
                <h1 className="product">Products</h1>
               <div className="card-bootstrap">
                {/**component Cards */}   
                <Card className="card1" border="primary" style={{ width: '19rem' }}>
                        <Card.Header>JavasCript</Card.Header>
                        <Card.Body>
                        <Card.Title>Course Online</Card.Title>
                        <Card.Text>
                            This course use
                            totaly learning with practice
                            exercises.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="card2" border="success" style={{ width: '19rem' }}>
                        <Card.Header>Java</Card.Header>
                        <Card.Body>
                        <Card.Title>Course Online</Card.Title>
                        <Card.Text>
                            This course conteins 50%
                            theorical learning and
                            the rest with practice
                            exercises.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="card3" border="warning" style={{ width: '19rem' }}>
                        <Card.Header>DevOps</Card.Header>
                        <Card.Body>
                        <Card.Title>Course Online</Card.Title>
                        <Card.Text>
                            This course is full theorical 
                            and practice, to introduce yourself
                            a one most experiencies of
                            learning in the world.
                        </Card.Text>
                        </Card.Body>
                    </Card>
               </div>
               <hr/>
                {/**component form */}
                <div className="form-bootstrap">
                    <h1>Formulary</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text"  
                                          placeholder="Enter your name."
                                          value={this.state.name}
                                          onChange={name => this.setState({name:name.target.value})}/>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" 
                                          placeholder="Let your message for us."
                                         rows={3}
                                         value={this.state.msg}
                                         onChange={msg => this.setState({msg: msg.target.value})}/>
                            <Form.Text className="text-muted">
                            We'll never share your name and
                            text with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" 
                                type="submit"
                                onClick={this.cadastro}>
                            Submit
                        </Button>
                    </Form>
                </div>

                <div className="copy">
                    <p>&copy; react-bootstrap and all rights reserved.</p>
                </div>
            </div>
        )
    }
}


