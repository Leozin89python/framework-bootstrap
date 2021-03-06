import React from 'react'
import {Carousel} from 'react-bootstrap'

import Img1 from '../../assets/img1.jpg'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/img3.png'
import Img4 from '../../assets/img4.png'


function slider() {
    return(

    <Carousel>
        <Carousel.Item interval={3000}>
            <img
            className="d-block w-100"
            src={Img1}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img
            className="d-block w-100"
            src={Img2}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img
            className="d-block w-100"
            src={Img3}
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img
            className="d-block w-100"
            src={Img4}
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>

    )
}
export default slider