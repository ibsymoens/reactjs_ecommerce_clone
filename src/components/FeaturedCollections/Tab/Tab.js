import React from "react";
import { Container, Box, Stack, Rating, Typography } from "@mui/material";

const Tab = ({ tabDetails }) => {
    return (
        <React.Fragment>
            <Container maxWidth="xl">
                {tabDetails.map((tab, index) => 
                    <Box sx={{ display: "flex" }} key={index}>
                        <Box sx={{ flex: ".6", display: { xs: "none", md: "block" }, width: "100%" }}>
                            <img src={tab.lImg} alt={tab.label} style={{ width: "100%", maxWidth: "700px", borderRadius: "1em" }} />
                        </Box>
                        <Box sx={{ flex: ".4", display: "flex", flexDirection: { xs: "column", sm: "row", md: "column" }, width: "100%", margin: "auto" }}>
                            {tab.products.map((product, index) => 
                                <Box sx={{ width: "100%", margin: "auto", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", mr: { xs: 0, sm: 6, md: 0 }, "&:last-child": { mr: 0 } }} key={index}>
                                    <img src={product.img} alt={product.label} style={{ width: { sm: "100%", md: "100%"}, maxWidth: { sm: "150px", lg: "240px"} }}/>
                                    <Stack>
                                        <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                                    </Stack>
                                    <Typography variant="subtitle1">{product.label}</Typography>
                                    <Typography variant="subtitle2">{product.price}</Typography>
                                </Box>
                            )}
                        </Box>
                    </Box>                
                )}
            </Container>
        </React.Fragment>
    );
}

export default Tab;