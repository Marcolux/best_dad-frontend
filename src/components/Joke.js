

import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const Joke = (props)=>{

    const [joke, setJoke] = useState('')
    const {id} = useParams()

    const getJoke = ()=>{
        const url = "https://icanhazdadjoke.com/"
        let h = new Headers();
        h.append('Accept', 'application/json');  //requesting (in between all the files available) just application/json, 
                                                 //I can be more specific and ask for Content-Type, Content-Length (this 2 for Body request),Accept,Accept-Language,X-requested-with, User-Agent
        let req = new Request( 
            url, {   //defining the request methods,headers,body,mode
            method:'GET',
            headers: h,
            mode: 'cors'
        })

    fetch(req)
        .then((response)=>{
            if (response.ok){
                return response.json();
            } else{
                throw new Error('BAD HTTP');
            }
        })
        .then((jsonData) => {
            setJoke(jsonData.joke)

        })
    }

    useEffect(()=>{
      getJoke()
      },[])


    return (
        <div className="api">
            <p>{joke}</p>
            <button onClick={getJoke}>get one more</button>
            <button onClick={ ()=>{axios.post(`http://localhost:3001/jokes/${id}`, {joke})} }>fav</button>

        </div>
    )
}
export default Joke