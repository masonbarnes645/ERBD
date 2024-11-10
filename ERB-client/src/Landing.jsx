import { Link, useOutletContext } from "react-router-dom"
import Box from "@mui/material/Box"
import { Button, Container, Typography } from "@mui/material"
import Carousel from "./Carousel"
import './App.css'
import { blue } from "@mui/material/colors";
import { useContext } from "react"


const Landing = () => {


    return (
        <Box sx={{ marginTop: '4rem' }}>
            <Box display={'flex'} justifyContent={'center'} marginBottom={'3rem'}>
                <img src="src/assets/Header_logo.png" />
            </Box>
            <Box width="1080px">
                <Carousel />
            </Box>

        </Box>
    )
}

export default Landing



