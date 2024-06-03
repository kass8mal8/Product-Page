import { Box, Divider, Stack, Typography } from "@mui/material";
import { ProductContext } from "../App";
import { useContext } from "react";
import Btn from "./Btn";
import delIcon from "../images/icon-delete.svg";

const Cart = () => {
    const { count, image } = useContext(ProductContext);
    return (  
        <Box className='product-cart'>
            <Box className='cart-head'> 
                <Typography variant='h6'>Cart</Typography> 
            </Box>
            <Divider />
            <Box className="cart-content">
                { count === 0 
                    ? <Typography variant='body1' color='text.secondary'>
                        Your Cart is Empty
                    </Typography>
                    : <Box>
                        <Box className='row'>
                            <img src={image} alt={"product"} className="image" />
                            <Box>
                                <Typography variant='body1' color='text.secondary'>
                                    Fall Limited Edition Sneakers
                                </Typography>
                                <Stack direction={'row'} spacing={3} alignItems={'center'}>
                                    <Typography variant='body1' color='text.secondary'>$125.00 x {count}</Typography>
                                    <Typography variant="h6">${125*count}</Typography>
                                </Stack>
                            </Box>
                            <img src={delIcon} width={'5%'} alt="delete" height={20} />
                        </Box>
                        <Btn text={"checkout"} icon={null} />
                      </Box>
                }
            </Box>
        </Box>
    );
}
 
export default Cart;