import { useState } from "react"

import Quote from "../components/Quote"
import Fact from "../components/FunFact"
import Joke from "../components/Joke"


const UserPage=(props)=>{

    const [userP, setUserP] = useState()
    // setUserP(props.user)
    console.log(props.user)



    return(
        <div className="userPage">
            <h1>User Page</h1>
            <div className="userPageContent">
                <div className="horoscope">
                    <p>horoscope</p>
                </div>
                <div className="apiCalls">
                    <p>API calls</p>
                    <div className="facts">
                       <Fact />
                    </div>
                    <div className="jokes">
                        <Joke/>

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