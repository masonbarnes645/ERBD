import { Link, useOutletContext } from "react-router-dom"
import Box from "@mui/material/Box"
import { Button, Container, Typography } from "@mui/material"
import Carousel from "./Carousel"
import './App.css'
import { blue } from "@mui/material/colors";
import { useContext } from "react"


const Landing = () => {
    

    return (
        <Box>
            <Carousel />
        </Box>
    )
}

export default Landing



