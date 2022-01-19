import { Rating } from '@mui/material';
import React from 'react'
import { Container, FormControl, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Navibar = ({handelChange,recheche,value,handelRating}) => {
    return (
        <div>
    <Navbar bg="light" expand="lg">
    <Container>
    <Navbar.Brand href="">Moviezland</Navbar.Brand>
    <Nav.Link  as={Link} to='/' >Home</Nav.Link  >
    <Nav className="me-auto">
      <FormControl 
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={recheche}
          onChange={handelChange}
        />
      
      <Rating
        name="simple-controlled"
        value={value}
        onChange={handelRating}
      />
    
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Navibar
