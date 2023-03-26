import React, { useRef } from "react";
import { Box, Container, Divider, Typography, Button, TextField } from "@mui/material";

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import DirectionsBikeOutlinedIcon from '@mui/icons-material/DirectionsBikeOutlined';

const blogs = [
    {icon: BuildOutlinedIcon, name: "How Often Does My Bike Need Maintenance?", btnText: "Read more"},
    {icon: BuildOutlinedIcon, name: "4 Things You Can Do to Avoid Flats.", btnText: "Read more"},
    {icon: SentimentSatisfiedOutlinedIcon, name: "Find the Right Seat for You.", btnText: "Read more"},
    {icon: DirectionsBikeOutlinedIcon, name: '"Which is the Best Electric Bike for Me?"', btnText: "Read more"},
]

const Blog = () => {
    const ref = useRef();
    let pressed = false
    let startX = 0

    const handleMouseDown = (e) => {
        pressed = true
        startX = e.clientX
    }

    const handleMouseLeave = (e) => pressed = false;

    window.addEventListener("mouseup", function(e) {
        pressed = false;
    })

    const handleMouseMove = (e) => {
        if (!pressed) return
        ref.current.scrollLeft += startX - e.clientX
    }

   

    return (
        <Box>
            <Container maxWidth="xl">
                <Divider sx={{ my: 12 }} />
                <Typography variant="h6" sx={{ display: "flex", alignItems: "center", fontWeight: 600, mb: 3 }}><FiberManualRecordIcon sx={{ color: "#F26426", mr: 2 }} />The blog</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", sm: "row" } }}>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>Guides for <br /> everything you need</Typography>
                    <Button sx={{ display: { xs: "none", sm: "block" }}} style={{ width: "180px", height: "40px", textTransform: "unset", background: "#FFCA60", color: "#000000", borderRadius: "2.5em" }}>Visit The Blog</Button>
                </Box>

                <Box sx={{ 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center", 
                        padding: "1rem",
                        my: 3
                    }}>
                    <Box 
                        ref={ref}
                        className="wrapper"
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        sx={{ 
                            display: "flex", 
                            gap: "2rem", 
                            width: "100%", 
                            overflowX: "auto", 
                            cursor: "pointer",
                            scrollSnapType: "x", 
                            scrollSnapMarginTop: "10px",
                            scrollBehavior: "smooth",
                            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                                backgroundColor: "#E5E5E5",
                                height: "5px",
                                cursor: "grab",
                              },
                              "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                                borderRadius: 8,
                                backgroundColor: "yellow",
                                minHeight: 24,
                                border: "3px solid #F26426",
                                width: "80%",
                                cursor: "grab",
                              },
                              "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                                backgroundColor: "pink",
                                cursor: "grab",
                              },
                              "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                                backgroundColor: "blue",
                                cursor: "grab",
                              },
                              "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                                backgroundColor: "green",
                                cursor: "grab",
                              },
                              "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                                backgroundColor: "red",
                                cursor: "grab",
                              },
                        }}
                    >
                        {blogs.map((blog, index) => 
                            <Box key={index} 
                                sx={{ 
                                    width: "100%",
                                    minWidth: "400px",
                                    maxWidth: "450px",
                                    height: "230px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    scrollSnapAlign: "start",
                                    border: "3px solid #E5E5E5",
                                    borderRadius: "1em",
                                    userSelect: "none",
                                    p: 4,
                                    mb: 4,
                                    "&:hover": { border: "3px solid #F26426", transition: ".5s" }
                                
                                }}>
                                <blog.icon sx={{ color: "#F26426" }} />
                                <Typography variant="h6">{blog.name}</Typography>
                                <Typography variant="subtitle2" style={{ fontWeight: 400, color: "#727272", textDecoration: "underline" }}>{blog.btnText}</Typography>
                            </Box>
                        )}
                    </Box>    
                </Box>
                <Box sx={{ display: { xs: "flex", sm: "none" }, justifyContent: "center", mb: { xs: 12, sm: 0 } }}>
                    <Button style={{ width: "180px", height: "40px", textTransform: "unset", background: "#FFCA60", color: "#000000", borderRadius: "2.5em" }}>Visit The Blog</Button>
                </Box>
            </Container>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#FAF9F5", py: 20 }}>
                <Typography variant="h2" sx={{ fontSize: { xs: "2.5em", sm: "3em", md: "4.5em" }, textAlign: "center", fontWeight: 600, mb: 8 }}>Don’t miss out.</Typography>
                <TextField 
                    type="email"
                    placeholder="Your email"
                    sx={{
                        "& fieldset": {
                            borderRadius: "2.5em",
                            padding: 0,
                        },
                        width: "90%",
                        maxWidth: "500px",
                        mb: 2
                    }}
                    style={{ borderRadius: "2.5em" }}
                />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>Sign up to get the latest on new releases and more.</Typography>
            </Box>
        </Box>
    );
}

export default Blog;