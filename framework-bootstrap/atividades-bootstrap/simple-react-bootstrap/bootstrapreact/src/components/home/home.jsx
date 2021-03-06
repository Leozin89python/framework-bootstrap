import React, {Component} from 'react'
import './home.css'

import Slider from './carrousel'

import {Card} from 'react-bootstrap'

export default class Home extends Component{
    render(){
        return(
            <div>
                {/**component Slider */}
                <Slider />
                <br />
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
                {/**component form */}

            </div>
        )
    }
}


