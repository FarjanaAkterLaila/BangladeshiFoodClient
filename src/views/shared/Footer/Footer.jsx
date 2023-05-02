import React from 'react';
import { FaFacebook ,FaInstagramSquare ,FaWhatsapp} from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="mt-5 bg-black">
        <div className="container py-5">
            <div className="row">
                <div className="col-md-3">
                    <h1 className="fw-bold text-white display-6">BDFoodiPlace</h1>
                    <p className="text-white">39/8, Bandor ,Chattogram</p>
                    <p className="text-white">Phone: +045879638 14</p>
                    <p className="text-white">Email: BDfoodiPlace@gmail.com</p>
                </div>
                <div className="col-md-1 text-white">
                    <h6>Explore</h6>
                    <p><a className="text-decoration-none text-white" href="">Home</a></p>
                    <p><a className="text-decoration-none text-white" href="">about</a></p>
                    <p><a className="text-decoration-none text-white" href="">Contact us</a></p>
                    <p><a className="text-decoration-none text-white" href="">Login</a></p>
                </div>
                <div className="col-md-1 text-white">
                    <h6>Legal Tream</h6>
                    <p><a className="text-decoration-none text-white" href="">Trems</a></p>
                    <p><a className="text-decoration-none text-white" href="">Privacy</a></p>
                    
                </div>
                <div className="col-md-2 text-white">
                    <h6>Follow us</h6>
                   <FaFacebook className='text-primary '/>
             <FaInstagramSquare className='text-primary mx-4' />
             <FaWhatsapp className='text-primary'/>
                </div>
                <div className="col-md-4 text-white">
                    <h6>Subscribe</h6>
                   
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className="btn btn-outline-secondary mx-4" type="button" id="button-addon2">Subscribe</button>
                      </div>
                </div>
            </div>
        </div>
        <div className="text-center text-white py-3">
            <p>&copy; Copyright BDFoodiPlace. All Rights Reserved</p>
        </div>
    </footer>
    );
};

export default Footer;