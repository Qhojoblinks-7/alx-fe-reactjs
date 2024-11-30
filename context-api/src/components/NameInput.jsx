import React, { useContext} from "react";
import { NameContext } from "./Namecontext";

function NameInput(){
    const { setName} = useContext(NameContext);

    const handleChange = (e) =>{
        setName(e.target.value);
    };

    return (
        <div>
            <input
            type="text"
            placeholder="Enter your name"
            onChange={handleChange}
            />
        </div>
    );
}

export default NameInput;