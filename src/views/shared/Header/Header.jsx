import React, { useContext, useState } from 'react';
import { Button, Container, Nav,  Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
const [state, setstate] = useState(false)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }


    return (
      <div >
        <Container fluid>
             <Navbar collapseOnSelect expand="lg"  variant="light">
      <Container >
        <Navbar.Brand href="#home" className='fs-1 fw-bold text-warning'>BDFoodiPlace</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto fs-4">
            <Link to='/'>Home</Link>
            <Link to='/blog' className='px-md-5 '>Blog</Link>
           
           
          </Nav>
          <Nav>
           
            {user && 
            <FaUserCircle style={{fontSize:'2rem'}} onMouseEnter={()=><i>{user.email}</i>}/> 
            }
           
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
        </div>
    );
};

export default Header;