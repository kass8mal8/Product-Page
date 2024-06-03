import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { ProductContext } from "../App";
import { useContext, useRef, useEffect } from "react";
import Btn from "./Btn";
import delIcon from "../images/icon-delete.svg";

const Cart = () => {
    const { count, image, isCart, setCount, setIsCart } = useContext(ProductContext);
    const cName = useRef(null)
    // if(isCart) {
    //     cName.style.display = 'block';
    // }
    // else {
    //     cName.style.display = 'none';
    // }

    useEffect(() => {
        if(cName.current) {
            cName.current.style.display = isCart ? 'block' : 'none';
        }
    }, [isCart]);

    const handleClear = () => {
        setCount(0)
        setIsCart(false);
    }

    return (  
        <Box className="product-cart" ref={cName}>
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
                            <IconButton sx={{ width: '5%', height: '5%' }} onClick={handleClear}>
                                <img src={delIcon} alt="delete" height={20} />
                            </IconButton>
                        </Box>
                        <Btn text={"checkout"} icon={null} />
                      </Box>
                }
            </Box>
        </Box>
    );
}
 
export default Cart;