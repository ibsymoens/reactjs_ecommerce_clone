import React from "react";
import { list2 } from "./routes";
import { Grid, Box, Typography } from "@mui/material";

const TabTwo = () => {
    return (
        <React.Fragment>
            {list2.map((bike, index) => 
                <Grid item xs={12} md={4} key={index}>
                    <Box sx={{ 
                        display: "flex", 
                        justifyContent: { xs: "space-around", md: "center" }, 
                        flexDirection: { xs: "row", md: "column" }, 
                        alignItems: "center", 
                        textAlign: "center",
                        px: { xs: 3, md: 0 }
                    }}
                    >
                        <Box sx={{ width: "100%", order: { xs: 2, md: 1 }}}>
                            <img src={bike.Img} style={{ width: "100%", maxWidth: "120px", margin: "auto" }}/>
                        </Box>
                        <Box sx={{ width: "100%", order: { xs: 1, md: 2 }}}>
                            <Typography variant="subtitle2">{bike.name}</Typography>
                            <Typography variant="subtitle2">{bike.desc}</Typography>
                        </Box>
                    </Box>      
                </Grid>  
            )}
        </React.Fragment>
    );
}

export default TabTwo;