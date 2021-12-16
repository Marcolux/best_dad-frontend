const Signup = ()=>{
    return(
    <div className="Pages">
        <h2>Signup</h2>
        <div className="sgnLogForm">

            <form className="LgnFrmCont" 
        // onSubmit={signupForm}
                >
                <div className='formInput'>
                    <label htmlFor="name" id='userName'>User Name:</label>
                    <input 
                // value={name} onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor="email">Email:</label>
                    <input 
                // value={email} onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" 
                // value={password} onChange={(e) => setPassword(e.target.value)} 
                />
                </div>
                <div className='formInput'>
                    <label >Zodiac Sign</label>
                    <input 
                // value={password} onChange={(e) => setPassword(e.target.value)} 
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