import { MessageContext } from "../context/Message"
import { useContext } from "react"

const Comp1 = () =>  {

    const { message } = useContext( MessageContext )
    
    return (
        <>
            <h1>
                This is Comp1
            </h1>
            <p>
                { message ? message : 'No message given' }
            </p>
        </>
    )
}

export default Comp1