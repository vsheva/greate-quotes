import {useParams} from "react-router-dom";
import React from "react";
import {Route} from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
    const params = useParams();
    console.log(params.quoteId);

    return (
        <section>
            <h1>Quote detail Page</h1>
            <p>{params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}><Comments/> </Route>
        </section>
    )
}

export default QuoteDetail;

// <Route path="./quotes/:quoteId/comments"> <p> Наши комментарии</p> </Route>