import { Stack, Typography } from "@mui/material";

const Badge = ({count}) => {
    return (  
        <Stack className='badge'>
            <Typography sx={{ fontSize: '12px' }}>{count}</Typography>
        </Stack>
    );
}

export default Badge;