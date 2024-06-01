import { Box, Stack, Typography } from "@mui/material";
import Btn from "./Btn";
import Counter from "./Counter";

const Content = () => {
    return (  
        <Box className='right'>
            <Typography variant="h6">sneaker company</Typography>
            <Typography variant="h3">Fall Limited Edition Sneakers</Typography>

            <Typography variant="body1" className="content-text">
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </Typography>

            <Stack direction='row' spacing={2}>
                <Typography variant='body4'>$125.00</Typography>
                <Typography variant='body2' className='discount'>50%</Typography>
            </Stack>

            <Typography className="content-text" sx={{ textDecoration: 'line-through' }}>$250</Typography>
            <Stack direction={'row'} spacing={2}>
                <Counter />
                <Btn />
            </Stack>
        </Box>
    );
}
 
export default Content;