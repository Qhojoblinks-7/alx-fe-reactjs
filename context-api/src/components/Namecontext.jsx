import React, { createContext, useState } from 'react'

//create context
export const NameContext = createContext();

//create the provider context
export function NameProvider({children}){
    const [name, setName] = useState('Gust');

    return (
        <NameContext.Provider value={{name, setName}}>
            {children}
        </NameContext.Provider>
    );
}