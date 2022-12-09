import '../styles/sidenav.css'
import close from '../images/icon-close.svg'

const SideNav = () => {

    const handleToggle = () => {
        document.querySelector('.overlay').classList.toggle('active')
    }
    

    return ( 
        <div className="overlay">
            <div className="side-nav" >
                <ul>
                    <li>
                        <img 
                            src={close} 
                            alt="close-icon"
                            onClick={handleToggle} />
                    </li>
                    <li>Colletions</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
     );
}
 
export default SideNav;