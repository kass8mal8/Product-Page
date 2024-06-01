import { Box, Typography } from '@mui/material'
import img1 from '../images/image-product-1.jpg'
import img2 from '../images/image-product-2.jpg'
import img3 from '../images/image-product-3.jpg'
import img4 from '../images/image-product-4.jpg'

import { useState } from 'react'

const Carousel = () => {
    const images = [
        {src:img1, id:1, alt:'image-one'},
        {src:img2, id:2, alt:'image-two'},
        {src:img3, id:3, alt:'image-three'},
        {src:img4, id:4, alt:'image-four'}
    ]

    const [current, setCurrent] = useState(0)
    const length = images.length

    return (  
        <Box className='carousel'>
            {images.map ((image, index) => (
                <Box
                    className= {index === current ? 'slide active' : 'slide'}
                    key = {index}> 
                    {index === current && 
                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="main-img"
                            width={400}
                            // onClick = {handleModal} 
                        />
                    }
                </Box>
            ))} 

        </Box>
    );
}
 
export default Carousel;