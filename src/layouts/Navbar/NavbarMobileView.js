import React, { useState } from "react";
import iLogo from "../../assets/images/logo.png";

import { Box, IconButton, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, Typography, Collapse, Drawer } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const NavbarMobileView = ({ navs, navsInfo, setOpenMenu }) => {
    const [navComponent, setNavComponent] = useState(navs);

    const handleClose = () => {
        // temporary fix
        let navData = [...navComponent];
        navData[0].show = false;
        navData[1].show = false;
        navData[2].show = false;
        navData[3].show = false;
        setNavComponent(navData);
        setOpenMenu(false);
    }

    const handleShowNavMenu = (idx) => {
        let newNavComponentData = [...navComponent];
        navComponent[idx].show = !navComponent[idx].show; 
        setNavComponent(newNavComponentData);
        console.log("navComponent: ", navComponent);
    }

    const handleCloseMenu = (idx) => {
        let newNavComponentData = [...navComponent];
        navComponent[idx].show = !navComponent[idx].show; 
        setNavComponent(newNavComponentData);
    }

    return (
        <Box>
            <Box sx={{ width: "100vw", px: 3, zIndex: 999 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 2 }}>
                    <IconButton children={<SearchIcon />} />
                    <img src={iLogo} alt="Logo" />
                    <IconButton onClick={handleClose} children={<CloseIcon />} />
                </Box>
                <List>
                    {navs.map((nav, index) => 
                        <React.Fragment key={index}>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => handleShowNavMenu(nav.idx)}>
                                    <ListItemText primary={nav.label} />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    )}
                </List>
                <List>
                    {navsInfo.map((nav, index) => 
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemIcon><nav.icon /></ListItemIcon>
                                <ListItemText primary={nav.label} />
                            </ListItemButton>
                        </ListItem>
                    )}
                    <Divider />
                </List>
                <List>
                    <ListItem>
                        <Typography variant="h6">Explore our award-winning ebikes</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="subtitle2">Our electric bikes have won more awards than any other brand from Electric Bike Review.</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="subtitle2" sx={{ display: "flex", alignItems: "center", mr: 3 }}><TaskAltIcon /> 14-day free trial</Typography>
                        <Typography variant="subtitle2" sx={{ display: "flex", alignItems: "center" }}><TaskAltIcon /> 1-year warranty</Typography>
                    </ListItem>
                </List>
            </Box>
            {navComponent.map((nav, index) => 
                <Box>
                    <Drawer
                        key={index}
                        anchor="left"
                        open={nav.show}
                    >
                        <Box sx={{ width: "100vw" }}>
                            <Box>
                                <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
                                    <img src={iLogo} alt="Logo" />
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", background: "#E5E5E5", px: 3,mb: 3 }}>
                                    <IconButton children={<ArrowBackIcon />} onClick={() => handleCloseMenu(nav.idx)} />
                                    <Typography variant="body1" sx={{ fontWeight: 500, margin: "auto" }}>{nav.label}</Typography>
                                    <FiberManualRecordIcon sx={{ color: "#E5E5E5" /*"#F26426"*/, mr: 1 }} />
                                </Box>
                                <nav.component />
                            </Box>
                        </Box>
                    </Drawer>
                </Box>
            )}
        </Box>
    );
}

export default NavbarMobileView;