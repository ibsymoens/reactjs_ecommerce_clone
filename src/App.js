import React, { useState, useEffect } from "react";
import { Navbar, Footer } from "./layouts";
import { LandingPage, Collections } from "./pages";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        
    }, [user]);

    return (
        <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} exact />
                    <Route path="/collections" element={<Collections />} exact />
                </Routes>
                <Footer />
            </Router>
        </React.Fragment>
    );
}

export default App;