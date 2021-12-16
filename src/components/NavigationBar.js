import { Link } from "react-router-dom"

const NavigationBar = ()=>{
    return (
        <div className="NavigationBar">
            <Link className ="navLink" to='/Login' >Login</Link>
            <Link className ="navLink" to='/Signup' >SignUp</Link>
            <Link className ="navLink" to='/User-page' >User page</Link>
            <div className="menuBar">
                <p>user menu</p>
                <div className="menuLinks">
                   <Link className ="menuNavLink" to='/User-page/facts'>factS</Link>
                   <Link className ="menuNavLink" to='/User-page/jokes'>jokes</Link>
                   <Link className ="menuNavLink" to='/User-page/quotes'>qoutes</Link>
                </div>
            </div>
            


        </div>
    )

}

export default NavigationBar