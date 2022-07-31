import {useParams, Route, Link, useRouteMatch} from "react-router-dom";
import React from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import {getSingleQuote} from "../lib/api";
import {useEffect} from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
    const match =useRouteMatch(); //{path: '/quotes/:quoteId', url: '/quotes/a2', isExact: true, params: {…}
    const params = useParams(); //{quoteId: '-N8GFVIBGaJsIzcXRm2F'}

    const {quoteId} =params;

    const {sendRequest, status, data:loadedQuote, error}=useHttp(getSingleQuote, true);

    useEffect(()=>{
       sendRequest(quoteId);
   },[sendRequest,quoteId])

    if (status==="pending") {
        return <div className="centered">
            <LoadingSpinner />
        </div>
    }

    if(error) {return <p className="centered ">{error}</p>}

    if (!loadedQuote) {return <p>No quote found!</p> }




    if(!loadedQuote.text) {
        return <p>No quote found!</p>
    }

    return (
        <section>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

            <Route path={`${match.path}`} exact>

                <div className='centered'>
                    <Link className="btn--flat" to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>

            </Route>

            {/*<p>{params.quoteId}</p>*/}
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>
        </section>
    )
}

export default QuoteDetail;


const a = (x,y)=>x+y
const b=a

































/**
 <h1>Quote detail Page</h1>
<p>{params.quoteId}</p>
 */

// <Route path="./quotes/:quoteId/comments"> <p> Наши комментарии</p> </Route>

/*
const DUMMY_QUOTES =[
    {id:"a1", author:"Valerii", text:"Learning React is great!"},
    {id:"a2", author:"Shevchenko", text:"Learning React is fun!"},
];
*/
