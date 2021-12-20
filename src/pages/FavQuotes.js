import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

const FavQuotes = ()=>{
    const [favQuotes, setFavQuotes] = useState([])
    const {id} = useParams()
   
    
    const getFavQuotes= async ()=>{
        //  axios.get(`https://best-dad-backend.herokuapp.com/quotes/${id}`)
        await axios.get(`http://localhost:3001/quotes/${id}`)
        .then((response)=>{
            
             setFavQuotes(response.data)    
        })
    
    }

    useEffect(getFavQuotes,[])

    return (
        <div className="favoriteBorder">
        <div className="favorite">
            <h1>Favorite Quotes</h1>
            {favQuotes.map((item, i)=>{
                
                return(
                    <div key={i} className="favs">
                <p >{item.content}</p>
                <button onClick={async()=>{
                    await axios.delete(`http://localhost:3001/quotes/${item.id}`)
                    // axios.delete(`https://best-dad-backend.herokuapp.com/quotes/${item.id}`)
                    getFavQuotes()
                } 
                }>remove</button>
                </div>
                )
            })}
        </div> 
        </div>
      

    )
}
export default FavQuotes