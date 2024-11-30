import React, { useContext } from 'react';
import { NameContext } from './Namecontext';

function NameDisplay(){
    const { name } = useContext(NameContext);

    return (
        <div>
        <h2>Hello, {name}</h2>
        </div>
    );
}

export default NameDisplay;