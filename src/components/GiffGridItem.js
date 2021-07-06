import React from 'react'

export const GiffGridItem = ({title, url}) => {
    console.log(title)
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

export default GiffGridItem