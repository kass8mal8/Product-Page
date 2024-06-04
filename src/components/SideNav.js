import { Box, Drawer, IconButton, List, ListItem } from "@mui/material";
import close from "../images/icon-close.svg"

const SideNav = ({ open, handleClose, setOpen }) => {
    return (  
        <Drawer
            anchor={'left'}
            open={open}
            onClose={handleClose}
            className='sidenav'
        >
            <Box className="sidenav" role='presentation' width={"250px"} p={2}
                sx={{
                    paddingLeft: 1.6,
                }}
            >

            <IconButton onClick={() => setOpen(false)}> <img src={close} alt="closeicon" /> </IconButton>

            <List sx={{ marginLeft: '-.5em', mt: '1.3em' }}>
                <ListItem sx={{ my: 1, fontWeight: 'bold' }}>Collections</ListItem>
                <ListItem sx={{ my: 1, fontWeight: 'bold' }}>Men</ListItem>
                <ListItem sx={{ my: 1, fontWeight: 'bold' }}>Women</ListItem>
                <ListItem sx={{ my: 1, fontWeight: 'bold' }}>About</ListItem>
                <ListItem sx={{ my: 1, fontWeight: 'bold' }}>Contact</ListItem>
            </List>

            </Box>
        </Drawer>
    );
}
 
export default SideNav;