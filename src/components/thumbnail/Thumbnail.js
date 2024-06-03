import { Box, Grid } from "@mui/material";

import th1 from "../../images/product-1-thumbnail.jpg"
import th2 from "../../images/product-2-thumbnail.jpg"
import th3 from "../../images/product-3-thumbnail.jpg"
import th4 from "../../images/product-4-thumbnail.jpg"

import img1 from '../../images/image-product-1.jpg'
import img2 from '../../images/image-product-2.jpg'
import img3 from '../../images/image-product-3.jpg'
import img4 from '../../images/image-product-4.jpg'
import { useState } from "react";
import ThumbnailSelection from "./ThumbnailSelection";
// import { ProductContext } from "../../App";

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
    // const {setImage, count} = useContext(ProductContext)

   
    // console.log(count)

    return (  
        <Grid container spacing={2} className="thumbnail">
            <Grid item sm={4}>
                <Box sx={{ width: '29.3em'}}>
                    <img src={source} alt="shoe" width={'100%'} height={400} />
                </Box>
            </Grid>
            <ThumbnailSelection setSource={setSource} thumbs={thumbs} images={images} />
        </Grid>

    );
}
 
export default Thumbnail;

