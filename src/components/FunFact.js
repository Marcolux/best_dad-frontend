import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const Fact = (props)=>{


    const [fact, setFact] = useState('')
    // const [favFact, setFavFact] = useState()

    const {id} = useParams()

    const getFact = ()=>{
        axios.get('https://uselessfacts.jsph.pl//random.json?language=en')
        .then((response)=>{
            setFact(response.data.text)
            console.log(fact)
        })
    }
    useEffect(()=>{
      getFact()
      },[])


    return (
        <div className="api">
            <p>{fact}</p>
            <button onClick={getFact}>get one more</button>
            <button onClick={ ()=>{axios.post(`http://localhost:3001/facts/${id}`, {fact})} }>fav</button>

        </div>
    )
}
export default Fact