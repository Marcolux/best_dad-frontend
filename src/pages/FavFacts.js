import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'


const Favfacts = ()=>{
    const [favFact, setFavFact] = useState([])
    const {id} = useParams()
   
    
    const getFavFact= async ()=>{
        //  axios.get(`https://best-dad-backend.herokuapp.com/facts/${id}`)
        await axios.get(`http://localhost:3001/facts/${id}`)
        .then((response)=>{
            setFavFact(response.data)    
        })
    
    }

    useEffect(getFavFact,[])

    return (
       
        <div className="favorite">
            <h1>Favorite Facts</h1>
            {favFact.map((item, i)=>{
                
                return(
                    <div key={i} className="favFact">
                <p >{item.content}</p>
                <button onClick={async()=>{
                    await axios.delete(`http://localhost:3001/facts/${item.id}`)
                    // axios.delete(`https://best-dad-backend.herokuapp.com/facts/${item.id}`)
                    getFavFact()
                } 
                }>remove</button>
                </div>
                )
            })}
            
        </div>
      

    )
}
export default Favfacts