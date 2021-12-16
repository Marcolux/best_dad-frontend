const Login = ()=>{
    return(
        <div className="Pages">
        <h1>Login</h1>
        <div className="logForm">
            <form className="LgnFrmCont"
            //  onSubmit={loginForm}
             >
                <div className='formInput'>
                    <label htmlFor="email">Email:</label>
                    <input 
                    // value={email} 
                    // onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor="password">Password:</label>
                    <input type="password"
                    //  value={password} 
                    // onChange={(e) => setPassword(e.target.value)} 
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