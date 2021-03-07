import React, {Component} from 'react'
import './home.css'

import Slider from './carrousel'

import {Card,Form,Button} from 'react-bootstrap'

export default class Home extends Component{
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
                            <Form.Control type="email" placeholder="Enter your name." />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" placeholder="Let your message for us." rows={3} />
                            <Form.Text className="text-muted">
                            We'll never share your name and
                            text with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
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


