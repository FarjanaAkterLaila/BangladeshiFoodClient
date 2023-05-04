import React from 'react';
import { Button, Table } from 'react-bootstrap';
import Pdf from "react-to-pdf";
const Blog = () => {
  const ref = React.createRef();
    return (
        <div className='mx-5'>
            <div className='d-flex justify-content-around bg-light text-center p-5'>
            <h1>Blog page</h1>
            <div>
            <Pdf targetRef={ref} filename="div-blue.pdf">
        {({toPdf}) => (
            <Button  onClick={toPdf}>Download</Button>
        )}
    </Pdf>
  
            </div>
            </div>
            <div ref={ref}>
            <h1 className='d-flex justify-content-center'>Some Question Answer</h1>
            <div className='border border-info bg-primary bg-opacity-10 p-4'>
                <h2>1.Tell us the differences between uncontrolled and controlled components?</h2>
                <h5>Answer:
                   
                
                <Table striped bordered hover  className='mt-4 border-primary'>
                <thead>
        <tr>
          
          <th>Uncontrolled components</th>
          <th>Controlled components</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
         
          <td>Data is controlled by the DOM itself.</td>
          <td>Data is controlled by the parent component.</td>
          
        </tr>
        <tr>
         
          <td>Limited control over the form elements and data.</td>
          <td>Better control over the form elements and data.</td>
          
        </tr>
        <tr>
          <td>Uses a ref for their current values.</td>
          
          <td>Accepts its current value as a prop.</td>
        </tr>
      </tbody>
      </Table>
               <br></br>
                </h5>
            </div>
            <div className='border border-info bg-primary bg-opacity-10 mt-2'> 
            <h2>2.How to validate React props using PropTypes?
                </h2>
                <h5>Answer:<br></br>
                The techniques of Props and PropTypes are crucial for transferring read-only attributes between React components.React props, which is short for properties, can be used to communicate data from one component to another.The improper kind of properties can result in issues and unforeseen errors in our app if a component receives them.
                </h5>
                </div>
           
            <div className='border border-info bg-primary bg-opacity-10 mt-2'>
                <h2>3.Tell us the difference between nodejs and express js?</h2>
                <h5>Answer:<br></br>
                <Table striped bordered hover  className='mt-4 border-primary'>
                <thead>
        <tr>
          
          <th>Nodejs</th>
          <th>Expressjs</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
         
          <td>It is utilized to create input-output, event-driven, server-side applications.</td>
          <td>It is utilized to create web applications using Node.js' methods and ideas.</td>
          
        </tr>
        <tr>
         
          <td>It is based on the V8 engine from Google.</td>
          <td>It is built on Node.js.</td>
          
        </tr>
        <tr>
          <td>Run-time platform or environment designed for server-side execution of JavaScript.</td>
          
          <td>Framework based on Node.js.</td>
        </tr>
      </tbody>
      </Table>
                </h5>
                </div>
            <div className='border border-info bg-primary bg-opacity-10 mt-2'>
                <h2>4.What is a custom hook, and why will you create a custom hook?</h2>
                <h5>Answer:<br></br>
                A custom hook is a React function that may be shared between other components and contains reusable logic. They can aid in reducing repetitious code, enhancing the organization and maintainability of the code, and sharpening the focus of the components on rendering and presentation. Complex logic, such as form validation, data retrieval, or state management, can be handled using custom hooks.</h5>
              
                </div>
                </div>
        </div>
    );
};

export default Blog;