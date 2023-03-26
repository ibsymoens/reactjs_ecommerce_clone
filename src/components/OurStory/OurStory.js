import React from "react";
import iBckg from "../../assets/images/ExpandGlam_7_1440x810_9f525c76-5b90-4861-93a5-c5e1d804e9cd.webp";
import { Box, Typography, Button, Container } from "@mui/material";

const OurStory = () => {
    return (
        <React.Fragment>
            <Box sx={{ background: `url(${iBckg}) no-repeat`, backgroundSize: "100% 100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", margin: "auto", py: { xs: 6, sm: 12, md: 18, lg: 24, xl: 30 } }}>
                    <Typography variant="h2" sx={{ fontSize: { xs: "3em", sm: "4em", md: "5em" }, fontWeight: 500, color: "#FFF", textAlign: "center", mb: 2 }}>We build better bikes.</Typography>
                    <Button style={{ maxWidth: "170px", textTransform: "unset", background: "#FFCA60", color: "#000000", borderRadius: "2.5em", padding: "10px 15px" }}>Our Story</Button>
                </Box>
            </Box>
            <Box>
                <Typography variant="h5" sx={{ textAlign: "center", fontWeight: 600, my: 12, mx: 3 }}>15 years of innovation sets us apart. It’s why we’re the undisputed industry leader.</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", background: "#FAF9F5", py: { xs: 6, sm: 12, md: 18, lg: 24, xl: 30  } }}>   
                <Typography variant="h4" sx={{ color: "#000000", textAlign: "center" }}><span style={{ color: "#595959" }}>Over</span> 523,868+ <span style={{ color: "#595959" }}>riders are revolutionizing their routines.</span></Typography>
                <Typography variant="h4" sx={{ color: "#000000", textAlign: "center" }}>Cruising everywhere with their own RadGrin.</Typography>
            </Box>
        </React.Fragment>
    );
}

export default OurStory;