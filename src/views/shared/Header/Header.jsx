import React, { useContext } from 'react';
import { Button, Container, Nav,  Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }


    return (
        <Container>
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home" className='fs-1 fw-bold text-warning'>BDFoodiPlace</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to='/'>Home</Link>
            <Link className='mx-4' to='/blog'>Blog</Link>
           
           
          </Nav>
          <Nav>
            {user &&<FaUserCircle style={{fontSize:'2rem'}}/>}
           
            { user ?
              <Button onClick={handleLogOut} variant="secondary">Logout</Button> :

              <Link to ='/login'>
                <Button variant="secondary">Login</Button>
                </Link>}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default Header;