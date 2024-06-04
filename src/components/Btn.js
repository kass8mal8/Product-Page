import { Button } from "@mui/material";
import { useContext } from "react";
import { ProductContext } from "../App";

const Btn = ({text, icon}) => {
    const { setIsClicked, count } = useContext(ProductContext)
    const handleAddToCart = () => { setIsClicked(count > 0 && 'true') }

    return (  
        <Button 
            startIcon={ icon && <img src={icon} alt="icon" style={{ marginRight: '10px' }}/>}
            className="btn"
            variant='contained'
            onClick={handleAddToCart}
        > {text}
        </Button>
    );
}

 
export default Btn;