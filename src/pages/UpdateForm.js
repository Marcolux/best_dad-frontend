import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const UpdateInfo = (props)=>{
    console.log(props.user.name)
    const userName = props.user.name
    
    const [name, setName] = useState()

    const id = props.user.id


    const updateName = async()=>{
       await axios.put(`http://localhost:3001/user/${id}`, {name})
        props.setInfo(false)
        setTrue()
        // console.log(props.info)
        
    }
useEffect(()=>{

    updateName()
    
},[])

const setFalse=()=>{
    props.setInfo(false)
}
useEffect(setFalse,[])

const setTrue=()=>{
    props.setInfo(true)
    // updateName()
}
useEffect(setTrue,[])
    return(
        <div className="name">
        {
            props.info === true ?
            
           <h1 className="nameInput" onClick={(e)=>{
            e.preventDefault()  
            setFalse()
            }}>{props.user.name}</h1>
             :
        <div>
        <form className='nameInput' onSubmit={updateName}>
            <input 
            placeholder={props.user.name} 
            onChange={(e) =>{ 
                e.preventDefault()  
                setName(e.target.value)}} ></input>
            <input className='nameInputButton'  type="submit"></input>
        </form>
        </div>
 
}
    </div>
    )

}

export default UpdateInfo