import { AppBar, Badge, Stack, Toolbar } from "@mui/material";
import logo from "../images/logo.svg"
import avatar from "../images/image-avatar.png"
import cart from "../images/icon-cart.svg"

const Navbar = () => {
    return (  
        <AppBar position="static" className="navbar">
            <Toolbar sx={{ alignItems: 'center' }}>
                <img src={logo} alt='logo' className="logo" />

                <ul>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <Stack direction='row' spacing={4} alignItems={'center'}>
                    <img src={cart} alt='cart' width={25} height={25} />
                    {/* <Badge count={2} icon={cart} /> */}
                    <img src={avatar} alt='logo' width={50} />
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
 
export default Navbar;