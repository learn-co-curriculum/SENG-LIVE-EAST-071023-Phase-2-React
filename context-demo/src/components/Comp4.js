import { MessageContext } from "../context/Message"
import { useContext } from "react"
import { UserContext } from "../context/User"

const Comp4 = () =>  {
    
    const { message } = useContext( MessageContext )
    const { user } = useContext( UserContext )
    console.log( user )

    return (
        <>
            <h1>
                This is Comp4
            </h1>
            <p>
                { message ? message : 'No message given' }
            </p>
            <p>
                { user ? user.username : 'No user' }
            </p>
        </>
    )
}

export default Comp4