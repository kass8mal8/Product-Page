import img1 from '../images/image-product-1.jpg'
import img2 from '../images/image-product-2.jpg'
import img3 from '../images/image-product-3.jpg'
import img4 from '../images/image-product-4.jpg'
import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'
import { v4 as uuidv4 } from 'uuid'
import '../styles/carousel.css'

const ImageCarousel = () => {
    const images = [
        {src:img1, id:uuidv4(), alt:'image-one'},
        {src:img2, id:uuidv4(), alt:'image-two'},
        {src:img3, id:uuidv4(), alt:'image-three'},
        {src:img4, id:uuidv4(), alt:'image-four'}
    ]
    return ( 
        <div className="carousel-container">
            <ul>
                <li> <img src={previous} alt="prev-icon" /> </li>
                <li> <img src={next} alt="next-icon" /> </li>
            </ul>
            <div className='carousel'>
            {images.map (image => (
                <img 
                    src={image.src} 
                    alt={image.alt} 
                    key = {image.id}/>
            ))}
            </div>
            <div className='thumbnail'></div>
        </div>
     );
}
 
export default ImageCarousel;