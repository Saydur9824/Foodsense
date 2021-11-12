import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import pizza from '../../images/always/alwayspic.png'
import './Always.css'

const Always = () => {
    return (
        <div className = 'always-part'>
            <Container>
                <Row>
                    <Col sm={4} className ="always-text" >
                        <h1>Express</h1>
                        <h1>Home Delivery</h1>
                        <p>Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
                        <Button variant="dark">Get Pizza</Button>
                    </Col>
                    <Col sm={8}>
                        <img src= {pizza} alt="" />
                    </Col>
                   
                </Row>
            </Container>
        </div>
    );
};

export default Always;