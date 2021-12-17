import { useState } from "react"
import axios from "axios"



const Signup = (props)=>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [sign, setSign]  = useState('')

    const submit = (e)=>{
        e.preventDefault()
        axios.post(`http://best-dad-backend.herokuapp.com/user`,{name,email,password,sign})
        .then((response)=>{
            // console.log(response.data.newUser.id)
            localStorage.setItem('userId', response.data.newUser.id)
            props.setUser(response.data.newUser.id)
        })

    }



    return(
    <div className="Pages">
        <h2>Signup</h2>
        <div className="sgnLogForm">

            <form className="LgnFrmCont" 
        onSubmit={submit}
                >
                <div className='formInput'>
                    <label htmlFor="name" id='userName'>User Name:</label>
                    <input 
                value={name} onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor="email">Email:</label>
                    <input 
                value={email} onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" 
                value={password} onChange={(e) => setPassword(e.target.value)} 
                />
                </div>
                <div className='formInput'>
                    <label >Zodiac Sign</label>
                    <input 
                value={sign} onChange={(e) => setSign(e.target.value)} 
                />
                </div>
                <div className='formInput'>
                    <input className='formButton' type="submit" value="Submit" />
                </div>
            </form>
        
        
        </div>
    </div>
    )
}

export default Signup