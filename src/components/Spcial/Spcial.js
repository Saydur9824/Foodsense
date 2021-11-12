import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import spcial from '../../images/always/apecial.jpg'
import './Spcial.css'

const Spcial = () => {
    return (
        <div className = 'spcil-part'>
           <Container>
                <Row>
                    <Col>
                    <img src= {spcial} alt="" />
                    </Col>
                    <Col className = 'spcil-text'>
                        <h3>Special offer</h3>
                        <h1>Tony Pepperoni</h1>
                        <p>Mauris vitae odio non massa pharetra luctus. Nullam sed eleifend libero. Suspendisse vulputate imperdiet mi, ut vehicula dolor molestie nec. Phasellus finibus dapibus tortor pulvinar placerat. </p>
                        <h3>$ 8.99</h3>
                       
                       <Button variant="dark">Get Offer</Button>
                       
                    </Col>
                </Row>
            
            </Container>
        </div>
    );
};

export default Spcial;



