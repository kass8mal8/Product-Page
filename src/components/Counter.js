import { IconButton, Stack, Typography } from "@mui/material";
import { Add, Delete } from "@mui/icons-material"
import { useContext } from "react";
import { CountContext } from "../App";

const Counter = () => {
    const context = useContext(CountContext)
    console.log(context)
    return (  
        <Stack direction='row' spacing={2}>
            <IconButton> <Add /> </IconButton>
            {/* <Typography>{count}</Typography> */}
            <IconButton> <Delete /> </IconButton>
        </Stack>
    );
}
 
export default Counter;