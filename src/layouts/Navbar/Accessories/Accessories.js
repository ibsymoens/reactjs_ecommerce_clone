import React, { useState } from "react";
import imgHelmet from "../../../assets/images/Abus_Hyban_2.0_Helmet_gray_main_1_550x.webp";
import { list } from "./routes";
import { Container, Grid, Box, Typography, Button, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Divider } from "@mui/material";
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

const Accessories = () => {
    const [accessories, setAaccessories] = useState(list);
    const [expand, setExpand] = useState(false);

    const handleExpand = (idx) => {
        // tempory fix, works due to setExpand
        setExpand(!expand)
        const isExpand = accessories[idx].expand;
        accessories[idx].expand = !isExpand;
    }

    return (
        <React.Fragment>
            <Container maxWidth="xl" sx={{ color: "#000" }}>
                {/********************************* Large View *********************************/}
                <Box sx={{ display: { xs: "none", md: "block" }}}>
                    <Grid container>
                        <Grid item md={3} lg={2}>
                            <Typography variant="h4" sx={{ fontWeight: 500, mb: 1 }}>Elevate your ride – explore accessories for your bike model.</Typography>
                            <Button style={{ maxWidth: "170px", textTransform: "unset", background: "#FFCA60", color: "#000000", borderRadius: "2.5em" }} fullWidth>Shop All Accessories</Button>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <Grid container spacing={3}>
                                {accessories.map((accessorie, index) => 
                                    <Grid item key={index} md={4}>
                                        <Box sx={{ height: "100% !important" }}>
                                            <Box>
                                                <Typography variant="subtitle2" sx={{ width: "100%", textTransform: "uppercase", fontSize: ".8em", color: "#595959", borderBottom: "1px solid #EBEBEB", mb: 1.5 }}>{accessorie.label}</Typography>
                                            </Box>
                                            {accessorie.itemList.map((el, idx) => 
                                                <Typography key={idx} variant="subtitle2" sx={{ fontSize: ".8em", color: "#0D0D0D", pb: .7 }}>{el}</Typography>
                                            )}
                                        </Box>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                        <Grid item md={3} lg={4}>
                            <Box>
                                <img src={imgHelmet} alt="Helmet" style={{ width: "100%" }} />
                                <Typography variant="h5">Up to 60% off select accessories</Typography>
                                <Typography variant="subtitle2" sx={{ textDecoration: "underline" }}>Shop now</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                {/********************************* Small View *********************************/}
                <Box sx={{ display: { xs: "block", md: "none" }}}>
                    <Grid container>
                        <Grid item xs={12} sx={{ mb: 3 }}>
                            <Button style={{ width: "100%", textTransform: "unset", background: "#FFCA60", color: "#000000", borderRadius: "2.5em" }} fullWidth>Shop All Accessories</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <List>
                                {accessories.map((accessorie, index) => 
                                    <Box key={index}>
                                        <ListItemButton onClick={() => handleExpand(index)}>
                                            <ListItemText primary={accessorie.label} primaryTypographyProps={{ fontWeight: 600 }} />
                                            {accessorie.expand ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Divider />
                                        <Collapse in={accessorie.expand} timeout="auto" unmountOnExit>
                                            <List component="div">
                                                {accessorie.itemList.map((el, idx) => 
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
                        <Grid item xs={12}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                                <img src={imgHelmet} alt="Helmet" style={{ width: "50%" }} />
                                <Box>
                                    <Typography variant="h5">Up to 60% off select accessories</Typography>
                                    <Typography variant="subtitle2" sx={{ textDecoration: "underline" }}>Shop now</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Accessories;