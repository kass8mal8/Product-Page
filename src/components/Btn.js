import { Button } from "@mui/material";
import cart from "../images/icon-cart.svg"
import { useContext } from "react";
import { ProductContext } from "../App";

const Btn = () => {
    const { setIsClicked, count } = useContext(ProductContext)

    return (  
        <Button 
            startIcon={<img src={cart} alt="icon" style={{ marginRight: '10px' }}/>}
            className="btn"
            variant='contained'
            onClick={() => setIsClicked(count > 0 && 'true')}
        > add to cart
        </Button>
    );
}
 
export default Btn;