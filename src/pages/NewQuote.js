import QuoteForm from "../components/quotes/QuoteForm";
import {useHistory} from "react-router-dom"
import useHttp from "../hooks/use-http"; //custom hook from from use-http.js
import {addQuote} from "../lib/api"; //from api.js
import {useEffect} from "react";


const NewQuote =()=> {
   console.log ("useHttp", useHttp());                 //при вызове будет, то что возврашает             //{status: null, data: null, error: null, sendRequest: ƒ}

    const {sendRequest, status} = useHttp(addQuote)   //хук принимает from api.js и берем из него то, что возвращает
   const history = useHistory();

    useEffect (()=>{
        if(status==="completed") {                   //from custom hook useHttp
            history.push("/quotes")                   // history.push("/quotes") //* push или replace
        }
    }, [status, history])


    //*sending a request
    const addQuoteHandler=(quoteData)=>{
        sendRequest(quoteData)  //? это отправит наш addQuote request

        console.log("history", history) //{length: 20, action: 'PUSH', location: {…}, createHref: ƒ, push: ƒ, …}
    }

    return <QuoteForm isLoading ={status==="pending"} onAddQuote={addQuoteHandler}/>

}

export default NewQuote;