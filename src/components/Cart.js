import product from "../images/product-1-thumbnail.jpg"
import trash from "../images/icon-delete.svg"
import "../styles/cart.css"

const Cart = ({count}) => {
    const result = 125.00 * count
    const fontStyle = {
        color:'black',
        fontWeight:'bold'
    }
    return ( 
        <div className="cart-container">
            <h3 style={fontStyle}>Cart</h3>
            {count > 0 ? 
                <>
                <div className="cart-content">
                    <img src={product} alt="product" className="product-img" />
                    <div>
                        <p>Fall Limited Edition Sneakers</p>
                        <p>$125.00 x {count} <span style={fontStyle}>$ {result}.00</span></p>
                    </div>
                    <img src={trash} alt="delete" className="cart-image" />
                </div>
                <button>Checkout</button>
                </>
            : <p>Your cart is empty</p> }
        </div>
     );
}
 
export default Cart;