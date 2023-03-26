import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";

import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const aboutList = [
    {icon: DirectionsBikeIcon, name: "OUR MISSION", desc: "Dedicated to building a perfect bike, for everyone.", btnText: "Learn more"}, 
    {icon: DirectionsBikeIcon, name: "SERVICE", desc: "Our always-on services are here to support you daily.", btnText: "Learn more"}, 
    {icon: DirectionsBikeIcon, name: "Blog", desc: "Stay tuned and follow the Scenic Route.", btnText: "Learn more"}
];

const About = () => {
    return (
        <Box sx={{ color: "#000" }}>
            <Container maxWidth="xl">
                {/********************************* Large View *********************************/}
                <Box sx={{ display: { xs: "none", md: "block" }}}>
                    <Grid container>
                        <Grid item md={3} lg={2.5}>
                            <Typography variant="h4" sx={{ fontWeight: 500, mb: 1 }}>Explore ebikes built around everyday life.</Typography>
                        </Grid>
                        <Grid item md={9} lg={9.5}>
                            <Grid container>
                                <Box sx={{ display: "flex", width: "100%", ml: 3 }}>
                                    {aboutList.map((about, index) =>
                                        <Grid item key={index} md={3} lg={3.12} sx={{ mt: 2, mr: { md: 2, lg: 4 }, "&:last-child": { mr: 0 } }}>
                                            <Box>
                                                <Box sx={{ position: "absolute", transform: "rotate(-30deg)", zIndex: "-1", background: "#FFCA60", width: "30px", height: "30px" }}></Box>
                                                <about.icon sx={{ fontSize: "2em !important" }}/>
                                            </Box>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 300, color: "#676767", my: 1 }}>{about.name}</Typography>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 450, mb: 1 }}>{about.desc}</Typography>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 300, display: "flex", alignItems: "center" }}>{about.btnText} <NavigateNextIcon /></Typography>   
                                        </Grid>
                                    )}
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                {/********************************* Small View *********************************/}
                <Box sx={{ display: { xs: "block", md: "none" }}}>
                    <Grid container>
                        <Grid item xs={12} mb={3}>
                            <Typography variant="h4" sx={{ fontWeight: 500, mb: 1 }}>Explore ebikes built around everyday life.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                {aboutList.map((about, index) =>
                                    <Grid item key={index} xs={12}>
                                        <Box sx={{ margin: "auto", mb: 3 }}>
                                            <Box>
                                                <Box sx={{ position: "absolute", transform: "rotate(-30deg)", zIndex: "-1", background: "#FFCA60", width: "30px", height: "30px" }}></Box>
                                                <about.icon sx={{ fontSize: "2em !important" }}/>
                                            </Box>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 300, color: "#676767", my: 1 }}>{about.name}</Typography>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 500}}>{about.desc}</Typography>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 400, display: "flex", alignItems: "center" }}>{about.btnText} <NavigateNextIcon /></Typography>   
                                        </Box>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default About;