import axios from "axios"
// import ImageUploading from 'react-images-uploading';
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'


const Horoscope = (props)=>{
    console.log(props.user.zodiac_sign)
    let zodiac = props.user.zodiac_sign
    const[sign, setSign] = useState(zodiac)
    const [horoscope, setHoroscope] = useState({})

    // const[file, setFile] = useState()
    // const[fd, setTd] = useState(file)

    const {id} = useParams()

    const getHoroscope = ()=>{
        axios.post(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`)
        .then((response)=>{
            // console.log(response.data)
            setHoroscope(response.data)
        })
    }
    useEffect(()=>{
      getHoroscope()
      },[])


    return (
        <div className="horoscope">
            <h1>{horoscope.current_date}</h1>
            <h2>{sign}</h2>
            <h3>{horoscope.date_range}</h3>
            <p>{horoscope.description}</p>
            <p>Mood:{horoscope.mood}</p>

            <div className='signInput'>
                    <label htmlFor="name">sign:</label>
                    <input 
                value={sign} onChange={(e) =>setSign(e.target.value)}
                    />
                <button onClick={getHoroscope}>horoscope</button>
            </div>
        
        </div>
    )
}
export default Horoscope