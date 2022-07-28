import {Route, Switch} from "react-router-dom"

import AllQuotes from "./pages/AllQuotes"
import NewQuote from "./pages/NewQuote"
import QuoteDetail from "./pages/QuoteDetail"
import React from "react";
import {Redirect} from "react-router-dom";
import Layout from "./components/layout/Layout"

function App() {
    return (
        <Layout>
        <Switch>
            <Route path="/" exact>
                <Redirect to="/quotes" />
            </Route>

            <Route path="/quotes" exact>
                <AllQuotes/>
            </Route>
            <Route path="/quotes/:quoteId">
                <QuoteDetail/>
            </Route>
            <Route path="/new-quote">
                <NewQuote/>
            </Route>
        </Switch>
        </Layout>
    );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component