import { Stack, Box } from "@mui/material";
import { useState } from "react";

const ThumbnailSelection = ({thumbs, setSource, images}) => {
    const [imageId, setImageId] = useState(images[0].id)

    const handleThumbnail = (id) => {
        images.forEach(image => {
            if(image.id === id) {
                setSource(image.src)
                setImageId(image.id)
            }
        })
    }
    return (  
        <Stack direction={'row'} spacing={3} className='bottom'>
            {thumbs.map(thumb => (
                <Box 
                    sx={{
                        width: '100px', 
                        marginLeft: '40px',
                        border: imageId === thumb.id ? '3px solid hsl(26, 100%, 55%)' : 'none',
                        borderRadius: '17px',
                        '&:after': {
                            'transition': 'opacity .5s'
                        }
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
    );
}
 
export default ThumbnailSelection;