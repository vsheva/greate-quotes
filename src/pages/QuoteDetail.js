import {useParams, Route, Link, useRouteMatch} from "react-router-dom";
import React from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";


const DUMMY_QUOTES =[
    {id:"a1", author:"Valerii", text:"Learning React is great!"},
    {id:"a2", author:"Shevchenko", text:"Learning React is fun!"},
];



const QuoteDetail = () => {
    const match =useRouteMatch(); //{path: '/quotes/:quoteId', url: '/quotes/a2', isExact: true, params: {…}
    const params = useParams();
    console.log("match", match)


    const quote = DUMMY_QUOTES.find(elem=>elem.id === params.quoteId); //a1 из DUMMY_QUOTES === введенному нами маршруту a1  //потому что в App.js из пути url

    console.log("quote", quote) //{id: 'a1', author: 'Valerii', text: 'Learning React is great!'}
    if(!quote) {
        return <p>No quote found!</p>
    }

    return (
        <section>
            <HighlightedQuote text={quote.text} author={quote.author} />

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

/**
 <h1>Quote detail Page</h1>
<p>{params.quoteId}</p>
 */

// <Route path="./quotes/:quoteId/comments"> <p> Наши комментарии</p> </Route>