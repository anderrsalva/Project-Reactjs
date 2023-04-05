import React from 'react'
import './Spinner.scss'
import PropagateLoader from "react-spinners/PropagateLoader";


function Spinner() {
    return (
        <div className="spinner">
            {<PropagateLoader 
            color="#000000"
            size={15}
            speedMultiplier={1}
            />}
        </div>
    )
}

export default Spinner;