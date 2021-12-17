import { Link } from "react-router-dom"

const NavigationBar = (props)=>{
    console.log(props.user)
    return (
        <div className="NavigationBar">
            {
                props.user.id ?
                <>
                <div className="menuBar">
                <p>user menu</p>
                <div className="menuLinks">
                    <Link className ="menuNavLink" to={`/${props.user.id}/facts`}>factS</Link>
                    <Link className ="menuNavLink" to='/:id/jokes'>jokes</Link>
                    <Link className ="menuNavLink" to='/:id/quotes'>qoutes</Link>
                </div>
            </div>
                <Link className ="navLink" to={`/${props.user.id}`} >User page</Link>
            <p className="logout" onClick={()=>{
            localStorage.removeItem('userId')
            props.setUser({})
            
        }}>Logout</p>
            </>
            :
            <>
            <Link className ="navLink" to='/Login' >Login</Link>
            <Link className ="navLink" to='/Signup' >SignUp</Link>
            </>
            }
        </div>
    )

}

export default NavigationBar