import '../styles/home.css'
import minus from '../images/icon-minus.svg'
import plus from '../images/icon-plus.svg'
import Carousel from "./Carousel";
import Thumbnail from './Thumbnail';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import Modal from './Modal';


const Home = ({count, setCount, showCartItems}) => {

    const handleModal = () => {
        document.querySelector('.modal-overlay').classList.toggle('active')
    }
    const handleIndex = (idx) => {
        return idx
    }
    return ( 
        <div className="home-wrapper">
            <Carousel 
                handleModal = {handleModal}
                handleIndex = {handleIndex}/>
            <div className="home">
                <aside>
                    <h4>SNEAKER COMPANY</h4>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <p>
                        These low-profile sneakers are your perfect casual wear companion. Featuring a 
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>
                </aside>
                <ul className="pricing">
                    <li>$125.00</li>
                    <li>50%</li>
                    <li>$250.00</li>
                </ul>
                <div className="qty-order">
                    <ul>
                        <li>
                            <img 
                                src={minus} 
                                alt="minus-icon"
                                onClick={() => setCount(count < 1 ? count = 0 : count -= 1)} />
                        </li>
                        <li> {count} </li>
                        <li>
                            <img 
                                src={plus} 
                                alt="plus-icon" 
                                onClick={() => setCount(count += 1)}/>
                        </li>
                    </ul>
                    <button 
                        disabled={count === 0 && 'disabled'} 
                        onClick={showCartItems}>
                        <FontAwesomeIcon icon= {faCartShopping} className="cart-icon"/> Add to cart
                    </button>
                </div>
            </div>
            <Thumbnail handleIndex={handleIndex}/>

            <div className='modal'>
                <Modal handleModal = {handleModal} />
            </div>
        </div>
     );
}
 
export default Home;