import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/OIP.jpg'

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        <Navbar.Brand href="#"><h4 style={{marginLeft:"100px"}}> 
            <img style={{width:'150px',height:'50px'}} src={logo} alt="" /></h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 fw-bold" 
            style={{ maxHeight: '100px' , marginLeft:"150px"}}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Men</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Women
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Kids</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#" >
              Contact Us
            </Nav.Link>
          </Nav>
          <Form style={{marginRight:"100px"}} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header