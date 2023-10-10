// src/context/user.js
import React, { useEffect, useState } from 'react';

// create the context
const UserContext = React.createContext();

// create a provider component
function UserProvider({ children }) {
    
    const [ user, setUser ] = useState({ username: 'Princeton' })

    return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };