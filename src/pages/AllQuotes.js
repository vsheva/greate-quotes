import QuoteList from '../components/quotes/QuoteList'
import React from "react";

const DUMMY_QUOTES =[
    {id:"a1", author:"Valerii", text:"Learning React is great!"},
    {id:"a2", author:"Shevchenko", text:"Learning React is fun!"},
];

const AllQuotes =()=> {
    return(
    <QuoteList quotes={DUMMY_QUOTES}/>
    )
}

export default AllQuotes;

