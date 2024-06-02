import { Box, Stack, Typography } from "@mui/material";
import Btn from "./Btn";
import Counter from "./Counter";

const Content = () => {
    return (  
        <Box className='right'>
            <Typography variant="h6">sneaker company</Typography>
            <Typography variant="h3" mb={'.3em'}>Fall Limited Edition Sneakers</Typography>

            <Typography variant="body1" sx={{ color: 'hsl(219, 9%, 45%)' }}>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </Typography>


            <Box my={2} className='pricing'>
                <Stack direction='row' spacing={2} alignItems={'center'}>
                    <Typography variant='h5' sx={{ fontWeight: 'bolder' }}>$125.00</Typography>
                    <Typography variant='body2' className='discount'>50%</Typography>
                </Stack>
                <Typography 
                    sx={{ 
                        textDecoration: 'line-through', 
                        mt: 1, 
                        fontWeight: 'bold', 
                        color: 'hsl(220, 14%, 75%)'
                    }}
                >$250.00
                </Typography>
            </Box>

            <Box className="cta">
                <Counter />
                <Btn />
            </Box>
        </Box>
    );
}
 
export default Content;