import React from "react";
import { Header, FeaturedCollections, OurStory, ServiceAndSupport, Blog } from "../../components";

const LandingPage = () => {
    return (
        <React.Fragment>
            <Header />
            <FeaturedCollections />
            <OurStory />
            <ServiceAndSupport />
            <Blog />
        </React.Fragment>
    );
}

export default LandingPage;