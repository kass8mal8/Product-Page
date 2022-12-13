/* product images */

import img1 from '../images/image-product-1.jpg'
import img2 from '../images/image-product-2.jpg'
import img3 from '../images/image-product-3.jpg'
import img4 from '../images/image-product-4.jpg'

/* product images */
import '../styles/carousel.css'
import { useState } from 'react'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons"


const Carousel = ({handleModal}) => {
    // product images
    const images = [
        {src:img1, id:1, alt:'image-one'},
        {src:img2, id:2, alt:'image-two'},
        {src:img3, id:3, alt:'image-three'},
        {src:img4, id:4, alt:'image-four'}
    ]

    const [current, setCurrent] = useState(0)
    const length = images.length

    return ( 
        <div className="carousel-container">
            
            <>
                <li className="right">
                    <FontAwesomeIcon 
                        icon={faAngleRight}
                        onClick={()=> setCurrent(current === length - 1 ? 0 : current + 1)} />
                </li>

                <li className="left">
                    <FontAwesomeIcon 
                        icon={faAngleLeft}
                        onClick={()=> setCurrent(current === 0 ? length - 1 : current - 1)}/>
                </li>
            </>
            
            <div>
    
                {images.map ((image, index) => (
                    <div 
                        className= {index === current ? 'slide active' : 'slide'}
                        key = {index}> 
                        {index === current && 
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="main-img"
                                onClick = {handleModal} />
                        }
                    </div>
                ))}            
            </div>
        </div>
     );
}

export default Carousel