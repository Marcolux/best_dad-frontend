import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const Fact = (props)=>{


    const [fact, setFact] = useState('')
    // const [favFact, setFavFact] = useState()

    const {id} = useParams()

    console.log(id)

   

    
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


    const setFavFact=()=>{
        axios.post(`http://localhost:3001/facts/${id}`, {fact})
        .then((response)=>{
            console.log(response)
        })
    }


    return (
        <div className="api">
            <p>{fact}</p>
            <button onClick={getFact}>get one more</button>
            <button onClick={setFavFact}>fav</button>

        </div>
    )
}
export default Fact