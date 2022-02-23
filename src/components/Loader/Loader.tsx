import React from 'react'
import "./load.css"

export const Loader: React.FC = () => {
    return (
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    )
}
