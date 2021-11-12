import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../src/images/banner/banner1.jpg'
import banner2 from '../../../src/images/banner/banner2.jpg'
import banner3 from '../../../src/images/banner/banner3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Donuts to your home desk</h3>
                    <p>Order Fast Food Without Destroying Your Diet Eat Best Fat & Furious Burger for Lunch Viral YouTube Burger Changing the Industry What’s the Deal with Eatsy’s Drive-Thru Pizza</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Express Home Delivery</h3>
                    <p>Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Find Something Delicious For You.</h3>
                    <p>Proin ornare posuere quam ut euismod. Nam eu nunc vitae orci ultrices imperdiet ut id ligula. Sed interdum eros eget sagittis rutrum. Vestibulum in elementum mauris. In iaculis odio urna.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;<h2>banner</h2>