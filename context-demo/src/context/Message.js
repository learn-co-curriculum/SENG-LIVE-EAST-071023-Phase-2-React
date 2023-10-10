import React from 'react'
import { useState } from 'react';

const MessageContext = React.createContext()

const MessageProvider = ({ children }) => {
    const [ message, setMessage ] = useState( null )
    const changeMessage = newMessage => setMessage( newMessage )

    const patchMessage = () => {}
    
    return <MessageContext.Provider value = {{ message, changeMessage, patchMessage }} >
        { children }
    </MessageContext.Provider>
}

export { MessageContext, MessageProvider }