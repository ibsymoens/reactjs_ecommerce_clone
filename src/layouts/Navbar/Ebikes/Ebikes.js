import React, { useState } from "react";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";

import { Container, Box, Grid, Typography, Button, Divider } from "@mui/material";

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const countTest = [{}, {}, {}];
const tabRoutes = [{ id: 0, component: TabOne }, { id: 1, component: TabTwo }];

const Ebikes = () => {
    const [tab, setTab] = useState(0);

    return (
        <React.Fragment>
            <Container maxWidth="xl" sx={{ color: "#000" }}>
                {/********************************* Large View *********************************/}
                <Box sx={{ display: { xs: "none", md: "block" }}}>
                    <Grid container>
                        <Grid item md={3} lg={2}>
                            <Typography variant="h4" sx={{ fontSize: "2.3em", fontWeight: 500, textAlign: "unset", mb: 1 }}>Explore our award-winning ebikes</Typography>
                            <Typography variant="subtitle2" sx={{ display: { xs: "none", sm: "block" }, color: "#676767", mt: 2, mb: 3 }}>Our electric bikes have won more awards than any other brand from <span style={{ textDecoration: "underline", color: "#000000" }}>Electric Bike Review</span>.</Typography>
                            <Button style={{ maxWidth: "170px", textTransform: "unset", background: "#FFCA60", color: "#000000", borderRadius: "2.5em" }} fullWidth>Shop All Ebikes</Button>
                            <Typography variant="subtitle1"></Typography>
                            <Typography variant="subtitle1" sx={{ display: "flex", alignItems: "center", mt: 2 }}><TaskAltIcon /> 14-day free trial</Typography>
                            <Typography variant="subtitle1" sx={{ display: "flex", alignItems: "center", mt: 1 }}><TaskAltIcon /> 1-year warranty</Typography>
                        </Grid>

                        <Grid item md={9} lg={7.5}>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Button onClick={() => setTab(0)} startIcon={tab === 0 && <FiberManualRecordIcon sx={{ fontSize: ".8", color: "#F26426" }} />} sx={{ color: "#000000", padding: "7.5px 20px", borderRadius: "2.5em", marginRight: "20px" }} style={tab === 0 ? { background: "#E5E5E5" } : null}>Shop by Style</Button>
                                <Button onClick={() => setTab(1)} startIcon={tab === 1 && <FiberManualRecordIcon sx={{ fontSize: ".8", color: "#F26426" }} />} sx={{ color: "#000000", padding: "7.5px 20px", borderRadius: "2.5em" }} style={tab === 1 ? { background: "#E5E5E5" } : null}>Shop by model</Button> 
                            </Box>
                            <Grid container alignItems="center" justifyContent="center">     
                                {tabRoutes.filter((activeTab) => tab === activeTab.id).map((e, index) => <e.component key={index} />)}
                            </Grid>
                        </Grid>

                        <Grid item md={12} lg={2.5}>
                            <Divider sx={{ display: { md: "block", lg: "none" }, my: { md: 3, lg: 0 } }} />
                            <Box sx={{ display: { md: "flex", lg: "block" }, justifyContent: "space-between" }}>
                                {countTest.map((test, index) => 
                                    <Box sx={{ display: "flex", mb: 3 }} key={index}>
                                        <Box sx={{ pr: 2 }}>
                                            <Box sx={{ position: "absolute", transform: "rotate(-30deg)", zIndex: "-1", background: "#FFCA60", width: "30px", height: "30px" }}></Box>
                                            <DirectionsBikeIcon sx={{ fontSize: "2.5em" }} />
                                        </Box>
                                        <Box sx={{ flexDirection: "column" }}>
                                            <Typography variant="subtitle2">Ebike Finder</Typography>
                                            <Typography variant="subtitle2" sx={{ color: "#676767" }}>Find the ebike that fits what you want and need.</Typography>
                                        </Box>
                                    </Box>
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                {/********************************* Small View *********************************/}
                <Box sx={{ display: { xs: "block", md: "none" }}}>
                    <Grid container>
                        <Grid item xs={12} sx={{ mb: 3 }}>
                            <Button style={{ width: "100%", textTransform: "unset", background: "#FFCA60", color: "#000000", borderRadius: "2.5em" }} fullWidth>Shop All Ebikes</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Button onClick={() => setTab(0)} startIcon={tab === 0 && <FiberManualRecordIcon sx={{ fontSize: ".8", color: "#F26426" }} />} sx={{ color: "#000000", padding: "7.5px 20px", borderRadius: "2.5em", marginRight: "20px" }} style={tab === 0 ? { background: "#E5E5E5" } : null}>Shop by Style</Button>
                                <Button onClick={() => setTab(1)} startIcon={tab === 1 && <FiberManualRecordIcon sx={{ fontSize: ".8", color: "#F26426" }} />} sx={{ color: "#000000", padding: "7.5px 20px", borderRadius: "2.5em" }} style={tab === 1 ? { background: "#E5E5E5" } : null}>Shop by model</Button> 
                            </Box>
                            <Grid container alignItems="center" justifyContent="center">     
                                {tabRoutes.filter((activeTab) => tab === activeTab.id).map((e, index) => <e.component key={index} />)}
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider sx={{ my: 3 }} />
                            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                {countTest.map((test, index) => 
                                    <Box sx={{ display: "flex", mb: 4 }} key={index}>
                                        <Box sx={{ pr: 2, mr: { xs: 0, sm: 3 } }}>
                                            <Box sx={{ position: "absolute", transform: "rotate(-30deg)", zIndex: "-1", background: "#FFCA60", width: "30px", height: "30px" }}></Box>
                                            <DirectionsBikeIcon sx={{ fontSize: "2.5em" }} />
                                        </Box>
                                        <Box sx={{ flexDirection: "column" }}>
                                            <Typography variant="subtitle2">Ebike Finder</Typography>
                                            <Typography variant="subtitle2" sx={{ color: "#676767" }}>Find the ebike that fits what you want and need.</Typography>
                                        </Box>
                                    </Box>
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Ebikes;