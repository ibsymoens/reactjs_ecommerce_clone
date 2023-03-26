import React, { useState } from "react";
import { list, services } from "./routes";
import { Box, Container, Grid, Typography, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Divider } from "@mui/material";
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

const ServiceAndSupport = () => {
    const [serviceAndSupporList, setServiceAndSupporList] = useState(list);

    const [expand, setExpand] = useState(false);

    const handleExpand = (idx) => {
        // tempory fix, works due to setExpand
        setExpand(!expand)
        const isExpand = serviceAndSupporList[idx].expand;
        serviceAndSupporList[idx].expand = !isExpand;
    }

    return (
        <React.Fragment>
            <Container maxWidth="xl" sx={{ color: "#000" }}>
                {/********************************* Large View *********************************/}
                <Box sx={{ display: { xs: "none", md: "block" }}}>
                    <Grid container>
                        <Grid item md={3.5} lg={3}>
                            <Typography variant="h4" sx={{ fontWeight: 500, mb: 1, pr: 3 }}>Elevate your ride – explore accessories for your bike model.</Typography>
                        </Grid>
                        <Grid item md={5} lg={6}>
                            <Grid container spacing={3}>
                                {serviceAndSupporList.map((serviceAndSuppor, index) => 
                                    <Grid item key={index} md={4}>
                                        <Box>
                                            <Typography variant="subtitle2" sx={{ width: "100%", textTransform: "uppercase", fontSize: ".8em", color: "#595959", borderBottom: "1px solid #EBEBEB", mb: 1.5 }}>{serviceAndSuppor.label}</Typography>
                                        </Box>
                                        {serviceAndSuppor.itemList.map((el, idx) => 
                                            <Typography key={idx} variant="subtitle2" sx={{ fontSize: ".8em", color: "#0D0D0D", pb: .7 }}>{el}</Typography>
                                        )}
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                        <Grid item md={3.5} lg={3}>
                            {services.map((service, index) => 
                                <Box sx={{ display: "flex", mb: 3 }} key={index}>
                                    <Box sx={{ pr: 2 }}>
                                        <Box sx={{ position: "absolute", transform: "rotate(-30deg)", zIndex: "-1", background: "#FFCA60", width: "30px", height: "30px" }}></Box>
                                        <service.icon sx={{ fontSize: "2.5em" }} />
                                    </Box>
                                    <Box sx={{ flexDirection: "column" }}>
                                        <Typography variant="subtitle2">Ebike Finder</Typography>
                                        <Typography variant="subtitle2" sx={{ color: "#676767" }}>Find the ebike that fits what you want and need.</Typography>
                                    </Box>
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                </Box>
                {/********************************* Large View *********************************/}
                <Box sx={{ display: { xs: "block", md: "none" }}}>
                    <Grid container>
                        <Grid item xs={12}>
                            <List>
                                {serviceAndSupporList.map((serviceAndSuppor, index) => 
                                    <Box key={index}>
                                        <ListItemButton onClick={() => handleExpand(index)}>
                                            <ListItemText primary={serviceAndSuppor.label} primaryTypographyProps={{ fontWeight: 600 }} />
                                            {serviceAndSuppor.expand ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Divider />
                                        <Collapse in={serviceAndSuppor.expand} timeout="auto" unmountOnExit>
                                            <List component="div">
                                                {serviceAndSuppor.itemList.map((el, idx) => 
                                                    <ListItemButton key={idx}>
                                                        <ListItemText secondary={el} secondaryTypographyProps={{ fontWeight: 450 }} />
                                                    </ListItemButton>
                                                )}
                                            </List>
                                        </Collapse>
                                    </Box>
                                )}                
                            </List>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 4, ml: 6 }}>
                            {services.map((service, index) => 
                                <Box sx={{ display: "flex", mb: 6 }} key={index}>
                                    <Box sx={{ pr: 6 }}>
                                        <Box sx={{ position: "absolute", transform: "rotate(-30deg)", zIndex: "-1", background: "#FFCA60", width: "30px", height: "30px" }}></Box>
                                        <service.icon sx={{ fontSize: "2.5em" }} />
                                    </Box>
                                    <Box sx={{ flexDirection: "column" }}>
                                        <Typography variant="subtitle2">Ebike Finder</Typography>
                                        <Typography variant="subtitle2" sx={{ color: "#676767", fontWeight: 400 }}>Find the ebike that fits what you want and need.</Typography>
                                    </Box>
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default ServiceAndSupport;