import { Box, createTheme, Modal, ThemeProvider } from "@mui/material";
import "./styles/css/index.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Carousel from "./components/Carousel";
import { createContext, useState } from "react";
import Thumbnail from "./components/Thumbnail";

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

    return (  
        <ProductContext.Provider value={{count, setCount, image, setImage, isClicked, setIsClicked}}>
            <ThemeProvider theme={theme}>
                <Box className='container'>
                    <Navbar />

                    <Box className="main">
                        <Carousel />
                        <Thumbnail />
                        <Modal>
                            <Thumbnail />
                        </Modal>
                        <Content />
                    </Box>
                </Box>
            </ThemeProvider>
        </ProductContext.Provider>
    );
}
 
export default App;