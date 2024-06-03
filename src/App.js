import { Box, createTheme, ThemeProvider } from "@mui/material";
import "./styles/css/index.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Carousel from "./components/Carousel";
import { createContext, useState } from "react";
import Thumbnail from "./components/thumbnail/Thumbnail";
import Cart from "./components/Cart";

export const ProductContext = createContext({})

const App = () => {
    const theme = createTheme({
        typography: {
            fontFamily: 'kumbhsansMedium'
        }
    });
    const [count, setCount] = useState(0);
    const [image, setImage] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const [isCart, setIsCart] = useState(false);

    const [open, setOpen] = useState(true)
    const handleClose = (e, reason) => {
        if(reason === 'clickaway') return
        setOpen(false)
    }

    return (  
        <ProductContext.Provider value={{count, setCount, image, setImage, isClicked, setIsClicked, setIsCart, isCart}}>
            <ThemeProvider theme={theme}>
                <Box className='container'>
                    <Navbar />
                    <Cart />

                    <Box className="main">
                        <Carousel />
                        <Thumbnail />
                        <Content />
                        {/* <Overlay /> */}
                    </Box>
                </Box>
            </ThemeProvider>
        </ProductContext.Provider>
    );
}
 
export default App;