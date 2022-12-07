import img1 from '../images/image-product-1.jpg'
import img2 from '../images/image-product-2.jpg'
import img3 from '../images/image-product-3.jpg'
import img4 from '../images/image-product-4.jpg'
import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'
// import { v4 as uuidv4 } from 'uuid'
import '../styles/carousel.css'
import { useState } from 'react'

const ImageCarousel = () => {
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
            
            <ul>
                <li> 
                    <img 
                        src={previous} 
                        alt="prev-icon" 
                        onClick={() => setCurrent(current === 0 ? length - 1 : current - 1 )}/> 
                </li>
                <li> 
                    <img 
                        src={next} 
                        alt="next-icon" 
                        onClick={() => setCurrent(current === length - 1 ? 0 : current + 1 )}/> 
                </li>
            </ul>
            
            <div>
                {images.map ((image, index) => (
                    <div 
                        className= {index === current ? 'slide active' : 'slide'}
                        key = {index}> 
                        {index === current && 
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className = "main-img"/>
                        }
                    </div>
                ))}
            </div>
            
            <div className='thumbnail'></div>
        </div>
     );
}
 
export default ImageCarousel;