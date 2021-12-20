import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'


const FavJokes = ()=>{
    const [favJokes, setFavJokes] = useState([])
    const {id} = useParams()
   
    
    const getFavJokes= async ()=>{
        //  axios.get(`https://best-dad-backend.herokuapp.com/jokes/${id}`)
        await axios.get(`http://localhost:3001/jokes/${id}`)
        .then((response)=>{
            setFavJokes(response.data)    
        })
    
    }

    useEffect(getFavJokes,[])

    return (
       
        <div className="favorite">
            <h1>Favorite Jokes</h1>
            {favJokes.map((item, i)=>{
                
                return(
                    <div key={i} className="favFact">
                <p >{item.content}</p>
                <button onClick={async()=>{
                    await axios.delete(`http://localhost:3001/jokes/${item.id}`)
                    // axios.delete(`https://best-dad-backend.herokuapp.com/jokes/${item.id}`)
                    getFavJokes()
                } 
                }>remove</button>
                </div>
                )
            })}
            
        </div>
      

    )
}

export default FavJokes 