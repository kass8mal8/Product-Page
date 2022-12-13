import '../styles/carousel.css'

/* Thumbnail images*/

import th1 from '../images/product-1-thumbnail.jpg'
import th2 from '../images/product-2-thumbnail.jpg'
import th3 from '../images/product-3-thumbnail.jpg'
import th4 from '../images/product-4-thumbnail.jpg'

/* Thumbnail images*/

const Thumbnail = () => {
    // thumbnail images
    const thumbnail = [
        {src:th1, id:1, alt:'image-one'},
        {src:th2, id:2, alt:'image-two'},
        {src:th3, id:3, alt:'image-three'},
        {src:th4, id:4, alt:'image-four'}
    ]

    return ( 
        <div className="carousel-container">
            <div className='thumbnail'>
                {thumbnail.map( image => (
                    <img src={image.src} alt={image.alt} />
                ))}
            </div>
        </div>
     );
}
 
export default Thumbnail;