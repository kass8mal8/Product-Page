import SideNav from './SideNav'
import menu from '../images/icon-menu.svg'
import cart from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'

const Header = () => {
    return ( 
        <div>
            <ul>
                <li> <img src={menu} alt="menu-icon" /> </li>
                <li> <h2>sneakers</h2> </li>
                <li> <img src={cart} alt="icon-cart" /> </li>
                <li> <img src={avatar} alt="avatar" /> </li>
            </ul>
            <SideNav />
        </div>
     );
}
 
export default Header;