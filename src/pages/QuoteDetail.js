import {useParams, Route, Link} from "react-router-dom";
import React from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";


const DUMMY_QUOTES =[
    {id:"a1", author:"Valerii", text:"Learning React is great!"},
    {id:"a2", author:"Shevchenko", text:"Learning React is fun!"},
];



const QuoteDetail = () => {
    const params = useParams();
    console.log(params.quoteId);

    const quote = DUMMY_QUOTES.find(elem=>elem.id === params.quoteId); //a1 из DUMMY_QUOTES === введенному нами маршруту a1  //потому что в App.js из пути url

    console.log("quote", quote) //{id: 'a1', author: 'Valerii', text: 'Learning React is great!'}
    if(!quote) {
        return <p>No quote found!</p>
    }

    return (
        <section>
            <HighlightedQuote text={quote.text} author={quote.author} />

            <Route path={`/quotes/${params.quoteId}`} exact>

                <div className='centered'>
                    <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
                        Load Comments
                    </Link>
                </div>

            </Route>

            {/*<p>{params.quoteId}</p>*/}
            <Route path={`/quotes/${params.quoteId}/comments`}>
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