import React from "react";
import iHeaderSmallView from "../../assets/images/EOY-Promo-HP-Lead-Mobile-US-1368x2432_650x.webp";
import iHeaderLargeView from "../../assets/images/EOY-Promo-HP-Lead-Desktop-US-2776x1562_1300x.webp";
import { Container, Box, Typography, Button, Divider } from "@mui/material";

const Header = () => {
    return (
        <Box>
            <Container maxWidth="xl">
                <Box sx={{ 
                        background: { xs: `url(${iHeaderSmallView}) no-repeat`, sm: `url(${iHeaderLargeView}) no-repeat`},
                        backgroundSize: { xs: "100% 100%", sm: "100% 100%"},
                        borderRadius: "1.2em"
                    }}
                >
                    <Box sx={{ color: "#FFF", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", py: { xs: 20, sm: 8, md: 14, lg: 26, xl: 32 } }}>
                        <Typography variant="body1" sx={{ fontWeight: 800 }}>Prices Go Up in 2023</Typography>
                        <Typography variant="h2" sx={{ width: "85%", fontWeight: 500, textAlign: "center" }}>Final Days to Save: Up to $300 Off Ebikes</Typography>
                        <Typography variant="body1" sx={{ width: "80%", fontWeight: 500, textAlign: "center", py: 2 }}>Still have your eye on an ebike? Don't miss out Save up to $300 when you order by 1/2/23</Typography>
                        <Button style={{ maxWidth: "170px", textTransform: "unset", background: "#FFCA60", color: "#000000", borderRadius: "2.5em", padding: "10px 15px" }}>Shop Ebikes</Button>
                    </Box>
                </Box>
            </Container>
            <Divider sx={{ my: 3 }} light />
            <Container maxWidth="xl">
                <Typography variant="subtitle2">*While supplies last. Offer can't be combined with any other discounts. Offer good through 12/8/22 at 11:59 p.m. PT.</Typography>
            </Container>
        </Box>
    );
}

export default Header;