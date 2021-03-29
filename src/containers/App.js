import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
const About = React.lazy(() => import("./pages/About/About"));
const Donor = React.lazy(() => import("./pages/Donor/Donor"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const App = () => {
    return (
        <Router>
            <Layout>
                <Suspense fallback={null}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/donation" exact component={Donor} />
                        <Route path="/contact" exact component={Contact} />
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    );
};

export default App;
