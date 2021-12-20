import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const Quote = ()=>{
    
    const [quote, setQuote] = useState('')
    // const [favFact, setFavFact] = useState()

    const {id} = useParams()

    const getQuote =  ()=>{
       axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            // console.log(response.data.slip.advice)
            setQuote(response.data.slip.advice)
        })
    }
    useEffect(()=>{
      getQuote()
      },[])


    return (
        <div className="api">
            <h4>Advice :</h4>
            <p>{quote}</p>
            <div className="apiButton">
            <button onClick={getQuote}>get one more</button>
            <button onClick={ async ()=>{ await axios.post(`http://localhost:3001/quotes/${id}`, {quote})} }>Add</button>
            </div>
        </div>
    
    )
}
export default Quote