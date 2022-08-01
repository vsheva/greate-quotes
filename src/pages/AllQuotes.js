import { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import React from 'react';
import useHttp from '../hooks/use-http'; //custom hook
import { getAllQuotes } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound'; // from api

//
const AllQuotes = () => {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true); //*

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  //return <QuoteList quotes={DUMMY_QUOTES}/>;
  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;

/*
const DUMMY_QUOTES = [
    {id: "a1", author: "Valerii", text: "Learning React is great!"},
    {id: "a2", author: "Shevchenko", text: "Learning React is fun!"},
];
*/
