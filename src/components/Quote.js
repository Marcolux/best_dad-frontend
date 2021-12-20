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
            <p>Advice</p>
            <p>{quote}</p>
            <button onClick={getQuote}>get one more</button>
            <button onClick={ async ()=>{ await axios.post(`http://localhost:3001/quotes/${id}`, {quote})} }>fav</button>

        </div>
    
    )
}
export default Quote