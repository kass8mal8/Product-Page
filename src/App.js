import { Box, createTheme, ThemeProvider } from "@mui/material";
import "./styles/css/index.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Carousel from "./components/Carousel";
import { createContext, useState } from "react";

export const CountContext = createContext({})

const App = () => {
    const theme = createTheme({
        typography: {
            fontFamily: 'kumbhsansMedium'
        }
    });
    const [count, setCount] = useState({});

    return (  
        <CountContext.Provider value={count}>
            <ThemeProvider theme={theme}>
                <Box className='container'>
                    <Navbar />

                    <Box className="main">
                        <Carousel />
                        <Content />
                    </Box>
                </Box>
            </ThemeProvider>
        </CountContext.Provider>
    );
}
 
export default App;