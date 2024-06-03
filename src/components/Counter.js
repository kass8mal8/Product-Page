import { IconButton, Stack, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { ProductContext } from "../App";
import prodImage from "../images/image-product-1.jpg"

import plus from "../images/icon-plus.svg"
import minus from "../images/icon-minus.svg"

const Counter = () => {
    const {count, setCount, setIsClicked, setImage} = useContext(ProductContext)

    const handleSubtraction = () => {
        if(count < 1) return
        else {
            setCount(count - 1)
        }
        if(count === 1) setIsClicked(false)
    }

    useEffect(() => {
        count >= 1 && setImage(prodImage)
    }, [count]);

    return (  
        <Stack direction='row' spacing={2} alignItems={'center'} className="counter">
            <IconButton onClick={handleSubtraction}> <img src={minus} alt={'minus'} />  </IconButton>
            <Typography sx={{ fontWeight: 'bold' }}>{count}</Typography>
            <IconButton onClick={() => setCount(count + 1)}> <img src={plus} alt="plus" /> </IconButton>
        </Stack>
    );
}
 
export default Counter;