import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className = 'footer-part pt-5 pb-2'>
            <Container>
            <Row>
                <Col sm>
                 <h2>GET TOGETHER</h2>
                    <Link className = 'footer-link'><p>60 East 65th Street, NY</p></Link>
                    <Link className = 'footer-link'><p>Mon - Sat: 11AM - 11PM</p></Link>
                    <Link className = 'footer-link'><p>Sun: 11AM - 08PM</p></Link>
                    <Link className = 'footer-link'><p>Mon - Sat: 01PM - 10PM</p></Link>
                    <Link className = 'footer-link'><p><i className="fas fa-phone-volume mx-3"></i>1-800-700-600</p></Link>
                </Col>
                <Col sm>
                <h2>ABOUT US</h2>
                    <Link className = 'footer-link'><p>Our Story</p></Link>
                    <Link className = 'footer-link'><p>Our Team</p></Link>
                    <Link className = 'footer-link'><p>Our Food</p></Link>
                    <Link className = 'footer-link'><p>Health Measures</p></Link>
                    <Link className = 'footer-link'><p>Job Opportunities</p></Link>
                </Col>
                <Col sm>
                <h2>QUICK MENU</h2>
                    <Link className = 'footer-link'><p>Beef Burgers</p></Link>
                    <Link className = 'footer-link'><p>Chicken Burgers</p></Link>
                    <Link className = 'footer-link'><p>Plant-Based Burgers</p></Link>
                    <Link className = 'footer-link'><p>Sides</p></Link>
                    <Link className = 'footer-link'><p>Drinks</p></Link>
                </Col>
            </Row>
            <p className = 'mt-5'>©2021 BoldThemes All rights reserved</p>
            </Container>
        </div>
    );
};

export default Footer;





