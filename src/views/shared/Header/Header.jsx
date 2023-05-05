import React, { useContext, useState } from 'react';
import { Button, Container, Image, Nav,  Navbar, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

import Active from '../../../ActiveLink/Active';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  //  console.log(user.photoURL);
  // const [showTooltip, setShowTooltip] = useState(false);

  // const handleMouseEnter = () => {
  //   setShowTooltip(true);
  // }

  // const handleMouseLeave = () => {
  //   setShowTooltip(false);
  // }
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  const handleTouchStart = () => {
    setShowTooltip(true);
  };

  const handleTouchEnd = () => {
    setShowTooltip(false);
  };
  var renderTooltip = <span>name</span>;
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
            <Active to='/'>Home</Active>
            
            <Active to='/blog' className='px-md-5 '>Blog</Active>
           
           
          </Nav>
          <Nav>
           
            {user && 
            

       ( <div onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
          <img src={user.photoURL} alt="" style={{width
        :'50px'}} 
        className='rounded-circle mx-3 img-fluid' 
        />
         <div className='bottom-md-0 ' style={{position:'absolute', left: '80%',transform: 'translateX(-50%)',color: '#fff',padding: '0 10px',top:"20px",right:"10px",cursor: 'pointer'}}>
        
        <span style={{bottom: '80%',left: '100%',opacity: showTooltip ? 1 : 0,color: '#000',padding: '0 15px',fontSize:'1.5rem'}}>{user.displayName}</span>
      </div>
      </div>
         )}
         
           
            { user ?
              <Button onClick={handleLogOut}  variant="secondary">Logout</Button> :

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