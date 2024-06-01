import { Button } from "@mui/material";
import cart from "../images/icon-cart.svg"

const Btn = () => {
    return (  
        <Button 
            startIcon={<img src={cart} />}
            className="btn"
            variant='contained'
        > add to cart
        </Button>
    );
}
 
export default Btn;