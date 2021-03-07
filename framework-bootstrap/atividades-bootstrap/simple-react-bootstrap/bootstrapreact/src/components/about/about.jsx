import React, {Component} from 'react'
import './about.css'

import {Card, Button} from 'react-bootstrap'

export default class About extends Component{
    render(){
        return(
            <div>
               <div className="card-bootstrap-us">
                   <Card>
                        <h1>Came to know who us</h1>
                        <Card.Body>
                            <Card.Title>About us?</Card.Title>
                            <Card.Text>
                            We're one of the most school of
                            technologies in the world!
                            <br/>
                             <br/>
                              <br/>

                               <br/> 
                                 <br/>
                            <strong>
                            Come to know us in build one or more
                            skills, that turn your career!
                            </strong>
                            </Card.Text>
                            <Button variant="warning">
                                <a className="udemy" href="https://www.udemy.com" target="blank">udemy</a>
                            </Button>
                        </Card.Body>
                </Card>
               </div>

                <div className="copy-about">
                    <p>&copy; react-bootstrap and all rights reserved.</p>
                </div>
            </div>
        )
    }
}