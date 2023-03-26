import React from "react";
import { serviceAndSupport } from "./list";
import { Box, Grid, Container, Button, Typography } from "@mui/material";

const ServiceAndSupport = () => {
    return (
        <React.Fragment>
            <Container maxWidth="xl" sx={{ mt: 10 }}>
                <Box>
                    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                        <Button sx={{ background: "#FFF4DF", color: "#000 !important", textTransform: "unset", mb: 3 }} disabled>Best-in-class service</Button>
                        <Typography variant="h2" sx={{ fontSize: { xs: "2.5em", sm: "3em", md: "4.5em" }, textAlign: "center", fontWeight: 600 }}>Reliable service & support.</Typography>
                        <Typography variant="subtitle1" sx={{ width: "65%", textAlign: "center", fontWeight: 500, my: 3 }}>As pioneers of the ebike movement, we cracked the code for a seamless customer experience. Enjoy expert support wherever your ride takes you.</Typography>
                    </Box>
                    <Box>
                        <Grid container spacing={3}>
                            {serviceAndSupport.map((service, index) => 
                                <Grid item key={index} xs={12} sm={6} md={4} sx={{ margin: "auto" }}>
                                    <Box sx={{ width: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}>
                                        <img src={service.img} alt={service.name} style={{ width: "100%", maxWidth: "320px", borderRadius: "1em" }} />
                                        <Typography variant="body1" sx={{ fontWeight: 600, py: .5 }}>{service.name}</Typography>
                                        <Typography variant="subtitle2" sx={{ color: "#595959", textAlign: "center" }}>{service.description}</Typography>
                                        <Button sx={{ textTransform: "unset", color: "#000", border: "1px solid #E5E5E5", py: 1.5, px: 3, mt: 2 }} style={{ borderRadius: "2em" }}>{service.btnText}</Button>
                                    </Box>
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default ServiceAndSupport;