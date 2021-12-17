import { useState } from "react"
import axios from "axios"



const Login = (props)=>{
    const [email, setEmail] = useState('')
 
    const [password, setPassword] = useState('')

    const loginForm = (e) => {

        e.preventDefault()
        axios.post(`https://best-dad-backend.herokuapp.com/user/login`, { email, password })
        .then((response) => {
            console.log(response)

        localStorage.setItem('userId', response.data.user.id)
        props.setUser(response.data.user)
    })
}

    return(
        <div className="Pages">
        <h1>Login</h1>
        <div className="logForm">
            <form className="LgnFrmCont"
             onSubmit={loginForm}
             >
                <div className='formInput'>
                    <label htmlFor="email">Email:</label>
                    <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor="password">Password:</label>
                    <input type="password"
                     value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div className='formButton'>
                    <input  type="submit" value="Log In" />
                </div>
            </form>
        </div>
    </div>
    )
}

export default Login