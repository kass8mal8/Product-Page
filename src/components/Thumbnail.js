import { Stack, Box, Grid, Typography } from "@mui/material";

import th1 from "../images/product-1-thumbnail.jpg"
import th2 from "../images/product-2-thumbnail.jpg"
import th3 from "../images/product-3-thumbnail.jpg"
import th4 from "../images/product-4-thumbnail.jpg"

import img1 from '../images/image-product-1.jpg'
import img2 from '../images/image-product-2.jpg'
import img3 from '../images/image-product-3.jpg'
import img4 from '../images/image-product-4.jpg'
import { useState } from "react";
import { Opacity } from "@mui/icons-material";

const Thumbnail = () => {
    const images = [
        {src:img1, id:1, alt:'image-one'},
        {src:img2, id:2, alt:'image-two'},
        {src:img3, id:3, alt:'image-three'},
        {src:img4, id:4, alt:'image-four'}
    ]

    const thumbs = [
        {src:th1, id:1, alt:'image-one'},
        {src:th2, id:2, alt:'image-two'},
        {src:th3, id:3, alt:'image-three'},
        {src:th4, id:4, alt:'image-four'}
    ]

    const [source, setSource] = useState(images[0].src)
    const [imageId, setImageId] = useState(images[0].id)

    const handleThumbnail = (id) => {
        images.forEach(image => {
            if(image.id === id) {
                setSource(image.src)
                setImageId(image.id)
            }
        })
    }
    // console.log(source)


    return (  
        <Grid container spacing={2} className="thumbnail">
            <Grid item sm={4}>
                <Box sx={{ width: '29.3em'}}>
                    <img src={source} alt="shoe" width={'100%'} height={400} />
                </Box>
            </Grid>
            <Stack direction={'row'} spacing={3} className='bottom'>
                {thumbs.map(thumb => (
                    <Box 
                        sx={{
                            width: '100px', 
                            marginLeft: '40px',
                            border: imageId === thumb.id ? '3px solid hsl(26, 100%, 55%)' : 'none',
                            borderRadius: '17px',
                            // 
                        }} 
                        key={thumb.id}
                    >
                        <img src={thumb.src} alt={thumb.alt} onClick={() => handleThumbnail(thumb.id)} 
                            style={{
                                opacity: imageId === thumb.id ? 0.4 : 1
                                
                            }}
                        />
                    </Box>
                ))}
            </Stack>
        </Grid>

    );
}
 
export default Thumbnail;

