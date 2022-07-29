import QuoteForm from "../components/quotes/QuoteForm";
import {useHistory} from "react-router-dom" //* новое

const NewQuote =()=> {
   const history = useHistory();

    const addQuoteHandler=(quoteData)=>{
        console.log(quoteData);
        history.push("/quotes") //* push или replace
        console.log("history", history) //{length: 20, action: 'PUSH', location: {…}, createHref: ƒ, push: ƒ, …}
    }

    return <QuoteForm onAddQuote={addQuoteHandler}/>

}

export default NewQuote;