import React, { useState } from "react";
import Tab from "./Tab/Tab";
import { tabRoutes } from "./routes";
import { Container, Box, Button, Typography } from "@mui/material";

const navs = ["All-terrain", "City & commuter", "Cargo & family"];

const FeaturedCollections = () => {
    const [tab, setTab] = useState(0);

    return (
        <Box sx={{ mb: 10 }}>
            <Container maxWidth="xl">
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", mt: 10 }}>
                    <Button sx={{ background: "#FFF4DF", color: "#000 !important", textTransform: "unset", mb: 3 }} disabled>Featured collections</Button>
                    <Typography variant="h2" sx={{ fontSize: { xs: "4em", sm: "5.5em" }, textAlign: "center", fontWeight: 600 }}>A ride style <br />for everyone.</Typography>
                </Box>
                <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", mt: 6, mb: 3 }}>
                    {navs.map((nav, index) => 
                        <Button 
                            sx={{ flex: ".333", textTransform: "unset", fontSize: { xs: "1em", sm: "1.1em"} }} 
                            style={tab === index ? 
                                { 
                                    color: "#000000", 
                                    borderBottom: "3px solid #F26426", 
                                    borderBottomLeftRadius: 0, 
                                    borderBottomRightRadius: 0 
                                } 
                                : 
                                { 
                                    color: "#595959", 
                                    borderBottom: "3px solid #E5E5E5", 
                                    borderBottomLeftRadius: 0, 
                                    borderBottomRightRadius: 0 
                                }
                            }
                            onClick={() => setTab(index)}
                            key={index}
                        >
                            {nav}
                        </Button>
                    )}
                </Box>
                <Box>
                    {tabRoutes.filter((activeTab) => tab === activeTab.id).map((e, index) => <Tab tabDetails={e.tabDetails} key={index} />)}
                </Box>
            </Container>
        </Box>
    );
}

export default FeaturedCollections;