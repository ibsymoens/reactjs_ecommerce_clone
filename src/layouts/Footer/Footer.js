import React, { useState } from "react";
import iLogo3 from "../../assets/images/logo3.avif";
import { list } from "./routes";

import { Box, Container, Grid, Typography, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Divider } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

const Footer = () => {
    const socialMediaIcons = [{icon: FacebookIcon}, {icon: TwitterIcon}, {icon: InstagramIcon}, {icon: YouTubeIcon}];
    const [footerList, setFooterList] = useState(list);
    const [expand, setExpand] = useState(false);

    const handleExpand = (idx) => {
        // tempory fix, works due to setExpand
        setExpand(!expand)
        const isExpand = footerList[idx].expand;
        footerList[idx].expand = !isExpand;
    }

    return (
        <React.Fragment>
            <Box sx={{ background: "#121212", color: "#FFF", py: 4 }}>
                <Container maxWidth="xl">
                    <Box>
                        <Grid container>
                            <Grid item xs={12} md={2}>
                                <Box sx={{ p: { xs: 2, md: 0 }}}>
                                    <img src={iLogo3} alt="Logo" height={45} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={10}>
                                <Grid container spacing={3} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "space-between"}}>
                                    {footerList.map((eFooter, index) => 
                                        <Grid item key={index} md={2.1}>
                                            <Box sx={{ height: "100% !important" }}>
                                                <Box>
                                                    <Typography variant="body1" sx={{ width: "100%", fontWeight: 700, color: "#FFF", mb: 1.5 }}>{eFooter.label}</Typography>
                                                </Box>
                                                {eFooter.itemList.map((el, idx) => 
                                                    <Typography key={idx} variant="subtitle2" sx={{ fontSize: ".8em", color: "#FFF", pb: .7 }}>{el}</Typography>
                                                )}
                                            </Box>
                                        </Grid>
                                    )}
                                </Grid>
                                <Box sx={{ width: "100%", display: { xs: "block", md: "none" }}}>
                                    <List>
                                        {footerList.map((eFooter, index) => 
                                            <Box key={index}>
                                                <ListItemButton onClick={() => handleExpand(index)}>
                                                    <ListItemText primary={eFooter.label} primaryTypographyProps={{ fontWeight: 600 }} />
                                                    {eFooter.expand ? <ExpandLess /> : <ExpandMore />}
                                                </ListItemButton>
                                                <Divider />
                                                <Collapse in={eFooter.expand} timeout="auto" unmountOnExit>
                                                    <List component="div">
                                                        {eFooter.itemList.map((el, idx) => 
                                                            <ListItemButton key={idx}>
                                                                <ListItemText secondary={el} secondaryTypographyProps={{ color: "#FFF", fontWeight: 450 }} />
                                                            </ListItemButton>
                                                        )}
                                                    </List>
                                                </Collapse>
                                            </Box>
                                        )}                
                                    </List>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", mt: 3 }}>
                            <Box sx={{ display: "flex", flexDirection: "column", order: { xs: 2, md: 1 } }}>
                                <Typography variant="subtitle2" sx={{ fontSize: ".8em" }}>&copy; 2022 Rad Power Bikes Inc., All Rights Reserved</Typography>
                                <Typography variant="subtitle2" sx={{ fontSize: ".8em" }}>Terms of Purchase | Terms of Use | Warranty | Returns | Privacy Policy</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", order: { xs: 1, md: 2 } }}>
                                <Typography variant="subtitle1">Follow Us</Typography>
                                <Box>
                                    {socialMediaIcons.map((icon, index) => 
                                        <IconButton key={index}  children={<icon.icon sx={{ color: "#FFF" }} />} />
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    );
}

export default Footer;