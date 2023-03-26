import React, { useState } from "react";
import iLogo from "../../assets/images/logo.png";

import { Box, IconButton, Typography, Button, FormControl, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const NavbarUserForm = ({ setOpenForm }) => {
    const [tab, setTab] = useState(0);    

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <React.Fragment>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>
                <IconButton children={<SearchIcon />} />
                <img src={iLogo} alt="Logo" style={{ padding: "0 100px" }} />
                <IconButton onClick={() => setOpenForm(false)} children={<CloseIcon />} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>My account</Typography>
                <Typography variant="body1" sx={{ fontWeight: 450 }}>Create an account to personalize.</Typography>

                <Box sx={{ width: "100%", display: "flex", mt: 2 }}>
                    <Button sx={{ color: "#000000", textTransform: "unset" }} onClick={() => setTab(0)} style={tab === 0 ? { borderBottom: "3px solid #000000", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : { borderBottom: "3px solid #E5E5E5", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }} fullWidth>Sign in</Button>
                    <Button sx={{ color: "#000000", textTransform: "unset" }} onClick={() => setTab(1)} style={tab === 1 ? { borderBottom: "3px solid #000000", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : { borderBottom: "3px solid #E5E5E5", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }} fullWidth>Create account</Button>
                </Box>
                <FormControl onSubmit={handleSubmit} sx={{ width: "100%", p: 2 }}>
                    {tab === 0 ? 
                        <React.Fragment>
                            <TextField type="text" placeholder="First name" sx={{ my: 1 }} required fullWidth/>
                            <TextField type="text" placeholder="Last name" sx={{ my: 1 }} required fullWidth/>
                        </React.Fragment>
                    : null}
                    
                    <TextField type="email" placeholder="Email" sx={{ my: 1 }} required fullWidth/>
                    <TextField type="password" placeholder="Password" sx={{ my: 1 }} required fullWidth/>
                    <Button type="submit" sx={{ py: 1.5, px: 2 }} style={{ width: "50%", margin: "auto", background: "#FFCA60", color: "#000000", textTransform: "unset", borderRadius: "2em" }}>{tab === 0 ? `Sign in` : 'Create Account'}</Button>
                </FormControl>
            </Box>
        </React.Fragment>
    );
}

export default NavbarUserForm;