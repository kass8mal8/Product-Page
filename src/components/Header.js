import SideNav from './SideNav'
import menu from '../images/icon-menu.svg'
import cart from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'
import logo from "../images/logo.svg"
import '../styles/header.css'
import Cart from './Cart'

const Header = ({count}) => {

    const handleToggle = () => {
        document.querySelector('.overlay').classList.toggle('active')
    }

    const handleCart = () => {
        document.querySelector('.cart-container').classList.toggle('active')
    }

    return ( 
        <div>
            <div className="header">
                <ul>
                    <div className='cart-count'> <p>{count}</p> </div>
                    <li> 
                        <img 
                            src={menu} 
                            alt="menu-icon" 
                            className='menu'
                            onClick={handleToggle} />
                    </li>
                    <li> <img src={logo} alt="logo" /> </li>
                    <li> <img src={cart} alt="icon-cart" onClick={handleCart} /> </li>
                    <li> <img src={avatar} alt="avatar" width="40"/> </li>
                </ul>
            </div>
            <SideNav />
            <Cart count = {count} />
        </div>
     );
}
 
export default Header;