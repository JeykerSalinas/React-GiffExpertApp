import React from 'react'
import { useFetchGiffs } from '../hooks/useFetchGiffs'
import GiffGridItem from './GiffGridItem'

export const GiffGrid = ({category}) => {
        
    const {data : images,loading} = useFetchGiffs( category ); 

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            { loading && <p className="animate__animated animate__flash">Loading...</p>}
            
        <div className="card-grid">
            {
                images.map(img=> {
                    return ( <GiffGridItem 
                    key = {img.id}
                    {...img}/>)
                }
                )
            }
        </div>
        </>
    )
}

