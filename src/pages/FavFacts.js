import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'


const Favfacts = ()=>{
    const [favFact, setFavFact] = useState([])
    const {id} = useParams()
    
    useEffect(()=>{
        const getFavFact=async ()=>{
            await axios.get(`http://best-dad-backend.herokuapp.com/facts/${id}`)
            .then((response)=>{
                setFavFact(response.data)
                
                
            })
        }
        getFavFact()
    }, [favFact, id])

    // const deleteFavFact=async (x)=>{
    // await axios.delete(`http://localhost:3001/facts/${x}`),
    // setFavFact([...favFact]),
    // console.log(favFact)
        
    // }
    console.log(favFact)

    
    
    
    return (
        <div className="favorite">
            <h1>Favorite Facts</h1>
            {favFact.map((item, i)=>{
                
                return(
                <div key={i} className="favFact">
                <p >{item.content}</p>
                <button onClick={()=>{
                  
                        axios.delete(`http://best-dad-backend.herokuapp.com/facts/${item.id}`)
                        // setFavFact([...favFact])
                       
                }   
        
    
                
                
                }>remove</button>
                </div>
                )
            })}
            
        </div>
    )
}
export default Favfacts