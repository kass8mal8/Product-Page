import ImageCarousel from "./ImageCarousel";
import '../styles/home.css'
import minus from '../images/icon-minus.svg'
import plus from '../images/icon-plus.svg'


const Home = ({count, setCount}) => {

    

    return ( 
        <div className="home-wrapper">
            <ImageCarousel />
            <div className="home">
                <aside>
                    <h3>SNEAKER COMPANY</h3>
                    <h2>Fall Limited Edition Sneakers</h2>
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
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
     );
}
 
export default Home;