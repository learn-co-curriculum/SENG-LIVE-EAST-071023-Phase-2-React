import { MessageContext } from "../context/Message"
import { useContext } from "react"

const MessageForm = () => {

    const { changeMessage } = useContext( MessageContext )

    return (
        <>
            <label>
                Message:
            </label>
            <input
                type = 'text'
                onChange={ ( event ) => changeMessage( event.target.value ) }
            />
        </>
    )
}

export default MessageForm