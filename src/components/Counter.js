import { IconButton, Stack, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material"
import { useContext } from "react";
import { ProductContext } from "../App";

import plus from "../images/icon-plus.svg"
import minus from "../images/icon-minus.svg"

const Counter = () => {
    const {count, setCount} = useContext(ProductContext)
    // const { count, setCount } = context
    console.log(count)

    const handleSubtraction = () => {
        if(count < 1) return
        else {
            setCount(count - 1)
        }
    }

    return (  
        <Stack direction='row' spacing={2} alignItems={'center'} className="counter">
            <IconButton onClick={handleSubtraction}> <img src={minus} alt={'minus'} />  </IconButton>
            <Typography sx={{ fontWeight: 'bold' }}>{count}</Typography>
            <IconButton onClick={() => setCount(count + 1)}> <img src={plus} alt="plus" /> </IconButton>
        </Stack>
    );
}
 
export default Counter;