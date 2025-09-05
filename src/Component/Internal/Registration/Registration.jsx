import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Footer from '../../Footer';
 import '../internal.css';
 

const Registration = () => {
  return (
    <div className="d-flex flex-column align-items-center w-full">
      <Container className="shadow my-5 p-4 rounded w-full" style={{ backgroundColor: '#f8f9fa', display:'flex' ,justifyContent:"center",alignItems:"center"}}>
       

        <Form className="bg-green-200 hover:bg-green-300 w-full form">
             <div className="w-full Areaform" >
                <h1 className="font-bold text-green-700 text-success text-2xl text-left underline h1Areaform">Register to MoneyYetu</h1>
          <Row className="hover:bg-white m-4 p-6 text-right" style={{boxShadow:"1px 1px 1px 2px black",borderRadius:"10px"}}>
            <Col md={6}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label className="m-2 responsive-paragraph">Name
                <Form.Control type="text" placeholder="Enter your name"   />
                </Form.Label>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label className="m-2 responsive-paragraph">Email 
                <Form.Control type="email" placeholder="Enter your email" />
                </Form.Label>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Label className="m-2 responsive-paragraph">Phone Number 
                <Form.Control type="tel" placeholder="Enter your phone number" />
                </Form.Label>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label className="m-2 responsive-paragraph">Password 
                <Form.Control type="password" placeholder="Enter your password" />
                </Form.Label>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Label className="m-2 responsive-paragraph">Confirm Password 
                <Form.Control type="password" placeholder="Confirm your password" />
                </Form.Label>
              </Form.Group>
            </Col>
          </Row>
</div>
          <div className="m-3 text-left">
            <Button variant="success" type="submit" className="hover:bg-white mt-3 p-3" style={{boxShadow:"1px 1px 1px 1px black "}}>
              Register
            </Button>
          </div>
        </Form>
      </Container>
<div className="fixed-bottom w-100" >    <Footer /></div>
 
    </div>
  );
};

export default Registration;
