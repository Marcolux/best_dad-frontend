import { useState } from "react"
import { useParams } from "react-router-dom"

import Quote from "../components/Quote"
import Fact from "../components/FunFact"
import Joke from "../components/Joke"
import Horoscope from "./Horoscope"
import UpdateInfo from "./UpdateForm"


const UserPage=(props)=>{
   const [user,setUser] = useState(props.user)
//    const {id} = useParams()
//    console.log(id)

const[info,setInfo] =useState(false)
    return(
        
         
        <div className="userPage">
            <div className="Title">
            <UpdateInfo user={user} setUser={setUser} info={info} setInfo={setInfo}/>
            </div>
            <div className="userPageContent">
                <div >
                   
                    <Horoscope user={user} setUser={setUser}/>
                </div>
                <div className="apiCalls">
                    <div className="jokes">
                        <Joke/>
                    </div>
                    <div className="facts">
                       <Fact />
                    </div>
                    <div className="quotes">
                        <Quote/>

                    </div>
                </div>
            </div>

        </div>
        
    )
}
export default UserPage

