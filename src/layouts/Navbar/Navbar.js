import React, { useState } from "react";
import NavbarMobileView from "./NavbarMobileView";
import NavbarUserForm from "./NavbarUserForm";

import iLogo from "../../assets/images/logo.png";
import iLogo2 from "../../assets/images/logo2.png";

import { navs } from "./routes";
import { AppBar, Container, Toolbar, Box, IconButton, Typography, Drawer, Button } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const navsInfo = [{icon: FmdGoodOutlinedIcon, label: "Find Near you"}, {icon: PersonOutlineOutlinedIcon, label: "Sign in / Sign up"}, {icon: LanguageOutlinedIcon, label: "USA | EN"}];

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openForm, setOpenForm] = useState(false);

    return (
        <React.Fragment>
            <Box sx={{ background: "#404040", color: "#FFF" }}>
                <Container maxWidth="xl">
                    <Box sx={{ display: "flex", justifyContent: { xs: "flex-end", md: "space-between" }, py: 1 }}>
                        <Typography variant="subtitle2" sx={{ color: "#404040", cursor: "context-menu" }}>Find Rad Near You</Typography>
                        <Box sx={{ display: { xs: "none", md: "block" }}}>
                            <Typography variant="subtitle2">Final Days to Save: Select ebikes up to $300 off, only while supplies last.</Typography>
                        </Box>
                        <Typography variant="subtitle2">Find Rad Near You</Typography>
                    </Box>
                </Container>
            </Box>
            <AppBar position="sticky" sx={{ background: "#FFF", zIndex: 1 }} elevation={0}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/********************************* Desktop View *********************************/}
                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "space-between", alignItems: "center" }}>
                            <Box sx={{ flex: ".2" }}>
                                <img src={iLogo} alt="Logo" />
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flex: { md: ".7", lg: ".8"} }}>
                                {navs.map((nav, index) =>
                                    <Box 
                                        key={index} 
                                        sx={{ 
                                            cursor: "pointer", 
                                            mr: 3, 
                                            borderBottom: "2px solid transparent", 
                                            "&:last-child": { mr: 0 }, 
                                            "&:hover": { borderBottom: "2px solid #F26426" },
                                            "&:hover .active": { display: "flex", borderBottom: "2px solid #F26426", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
                                            "&:hover .inactive": { display: "none" },
                                            "&:hover div": { visibility: "visible", opacity: 1, transition: ".5s" }
                                        }}
                                    >
                                        <Button className="active" sx={{ color: "#000", textTransform: "unset", display: "none" }} endIcon={<KeyboardArrowUpIcon />}>{nav.label}</Button>
                                        <Button className="inactive" sx={{ color: "#000", textTransform: "unset", borderBottom: "2px solid transparent" }} endIcon={<KeyboardArrowDownIcon />}>{nav.label}</Button>
                                        <Box sx={{ width: "100%" /*"100vw"*/, visibility: "hidden", opacity: 0, background: "#FFF", position: "absolute", left: 0 /*-40.5*/, py: 3, px: 5, zIndex: 999 }}>                
                                            <nav.component />
                                        </Box>
                                    </Box>
                                )}
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flex: { md: ".3", lg: ".2"} }}>
                                <Typography variant="subtitle2" sx={{ color: "#000" }}>Test Ride</Typography>
                                <IconButton children={<SearchIcon />} />
                                <IconButton onClick={() => setOpenForm(true)} children={<PersonOutlineOutlinedIcon />} />
                                <IconButton children={<ShoppingCartOutlinedIcon />} />
                            </Box>
                        </Box>
                        {/*********************************  Mobile View *********************************/}
                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "space-between", alignItems: "center" }}>
                            <Box sx={{ display: { xs: "none", sm: "block" }}}><img src={iLogo} alt="Logo" /></Box>
                            <Box sx={{ display: { xs: "block", sm: "none" }}}><img src={iLogo2} alt="Logo" height={30} /></Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Typography variant="subtitle2" sx={{ color: "#000", mr: 2 }}>Test Ride</Typography>
                                <IconButton children={<ShoppingCartOutlinedIcon />} />
                                <IconButton onClick={() => setOpenMenu(true)} children={<MenuIcon />} />
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {/********************************** Mobile Menu **********************************/}
            <Drawer
                // variant="persistent"
                anchor="right"
                sx={{ width: "100%", display: { xs: "block", md: "none" },  zIndex: 999 }}
                open={openMenu}
            >
                <NavbarMobileView navs={navs} navsInfo={navsInfo} setOpenMenu={setOpenMenu} />
            </Drawer>
            {/*********************************** User Form **********************************/}
            <Drawer
                // variant="persistent"
                anchor="right"
                sx={{ width: "100%", display: { xs: "none", md: "block" },  zIndex: 999 }}
                open={openForm}
            >
                <NavbarUserForm setOpenForm={setOpenForm} />
            </Drawer>
        </React.Fragment>
    );
}

export default Navbar;