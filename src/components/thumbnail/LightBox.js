import { Box, Modal, IconButton, Stack } from "@mui/material";
import Carousel from "../Carousel";
import { Cancel } from "@mui/icons-material";

import th1 from "../../images/product-1-thumbnail.jpg"
import th2 from "../../images/product-2-thumbnail.jpg"
import th3 from "../../images/product-3-thumbnail.jpg"
import th4 from "../../images/product-4-thumbnail.jpg"

const LightBox = ({ open, setIsLightBox }) => {

    const styles = {
        outline: 'none',
        width: '30%',
        marginLeft: '35%',
        marginTop: '5%',
        position: 'relative',

        '.bigImage': {
            borderRadius: '.8em',
            height: '400px'
        },

        'ul': {
            display: 'inline-flex',
            listStyleType: 'none',
            justifyContent: 'space-between',
            cursor: 'pointer',

            'li': {
                position: 'absolute',
                marginTop: '45%',
                backgroundColor: 'white',
                padding: '9px 13px',
                borderRadius: '100px',
                alignItems: 'center',

                '&:nth-of-type(1)': {
                    left: '-44px',
                    // marginRight: '-30%'
                },

                '&:nth-of-type(2)': {
                    right: '-30px',
                    // marginRight: '-30%'
                }
            }
        }
    }

    const thumbs = [
        {src:th1, id:1, alt:'image-one'},
        {src:th2, id:2, alt:'image-two'},
        {src:th3, id:3, alt:'image-three'},
        {src:th4, id:4, alt:'image-four'}
    ]

    return (  
        <Modal
            open={open}
            onClose={() => setIsLightBox(false)}
        >
            <Box sx={styles}>
                <IconButton 
                    onClick={() => setIsLightBox(false)}
                    sx={{ 
                        color: 'whitesmoke', 
                        position: 'absolute', 
                        right: '-20px', 
                        top: '-25px' 
                    }}
                >
                    <Cancel />
                </IconButton>
                <Carousel />

                <Stack direction='row' spacing={3} justifyContent='space-between' alignItems='center' mt={3}>
                    { thumbs.map( thumb => (
                        <Box key={thumb.id} 
                            sx={{
                                width: '25%',
                                borderRadius: '10px',
                                objectFit: 'contain'
                            }}
                        >
                            <img src={thumb.src} alt={"thumb"} width={'100%'} style={{ borderRadius: '10px' }} />
                        </Box>
                    )) }
                </Stack>
            </Box>
        </Modal>
    );
}
 
export default LightBox;