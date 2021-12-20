import { Link } from "react-router-dom"
import UpdateInfo from "../pages/UpdateForm"
import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import { useNavigate } from "react-router-dom"

const NavigationBar = (props)=>{
    console.log(props.user.name)
    let nameUser = props.user.name
    const [info,setInfo] =useState(false)
    const [userUpdate, setUserUpdate] = useState(nameUser)
    let history = useNavigate()

//     const setUpdate = ()=>{
//         setInfo(true)
//   const sendToFact=()=>{ history(`/${props.user.id}/facts`)}

//     }
//    useEffect(setUpdate,[])
    return (
        <div className="NavigationBar">
            {
                props.user.id ?
                <>
               
                <div className="menuBar">
                <p>user menu</p>
                <div className="menuLinks">
                {/* <p onClick={sendToFact}>factS</p> */}
                    <Link className ="menuNavLink" to={`/${props.user.id}/facts`}>factS</Link>
                    <Link className ="menuNavLink" to={`/${props.user.id}/jokes`}>jokes</Link>
                    <Link className ="menuNavLink" to={`/${props.user.id}/quotes`}>qoutes</Link>
                </div>
            </div>
                <Link className ="navLink" to={`/${props.user.id}`} >User page</Link>
            <p className="logout" onClick={()=>{
            localStorage.removeItem('userId')
            props.setUser({})
            history("/")
            
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