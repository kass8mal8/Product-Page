import { AppBar, Stack, Toolbar } from "@mui/material";
import logo from "../images/logo.svg"
import avatar from "../images/image-avatar.png"
import cart from "../images/icon-cart.svg"
import Badge from "./Badge";
import { useContext } from "react";
import { ProductContext } from "../App";
import menu from "../images/icon-menu.svg";

const Navbar = ({ setOpen }) => {
    const { count, isClicked, setIsCart } = useContext(ProductContext)
    const handleShowCart = () => { isClicked ? setIsCart(true) : setIsCart(false) }
    
    return (  
        <AppBar position="static" className="navbar">
            <Toolbar sx={{ alignItems: 'center' }}>
                <img src={menu} alt="menu" className="menu" onClick={() => setOpen(true)} />
                <img src={logo} alt='logo' className="logo"  />

                <ul>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <Stack direction='row' spacing={4} alignItems={'center'} className="topright">
                    <img src={cart} alt='cart' width={25} height={25} className="cart" onClick={handleShowCart} />
                    {(isClicked && count >= 1) && <Badge count={count} />}
                    <img src={avatar} alt='logo' className="avatar" />
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
 
export default Navbar;