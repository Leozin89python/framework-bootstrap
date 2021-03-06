import React, {Component} from 'react'
import {Navbar,Nav} from 'react-bootstrap'

export default class Header extends Component{
    render(){
        return(
            <div>

               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#">React-Bootstrap&copy;</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/table">Table</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>

            </div>
        )
    }
}