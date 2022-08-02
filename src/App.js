import  {Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';

import React from 'react';
import { Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(()=>import('./pages/NewQuote'));
const QuoteDetail = React.lazy(()=>import('./pages/QuoteDetail'));
const NotFound = React.lazy(()=>import('./pages/NotFound'));
const AllQuotes = React.lazy(()=>import('./pages/AllQuotes'));

function App() {
  return (
    <Layout>
      <Suspense  fallback={<LoadingSpinner />}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>

        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;


/*
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import NotFound from './pages/NotFound';
*/
