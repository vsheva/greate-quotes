import {Route, Switch} from "react-router-dom"

import AllQuotes from "./pages/AllQuotes"
import NewQuote from "./pages/NewQuote"
import QuoteDetail from "./pages/QuoteDetail"
import React from "react";
import {Redirect} from "react-router-dom";

function App() {
    return (
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
    );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component