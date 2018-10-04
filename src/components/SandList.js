import React from 'react'
import Sandwich from './Sandwich'

const SandList = (props) => {
    const sandwiches = props.sands.map(sandwich => {
        return <Sandwich    key={sandwich.id}
                        name={sandwich.name}
                        description={sandwich.description}
                        imageURL={sandwich.imageURL} 
                        videoURL={sandwich.videoURL}
                        id={sandwich.id}
                        deleteOne={props.deleteOne}
                        showUpdateForm={props.showUpdateForm}
                        loadData={props.loadData}
                        selectId={props.selectId} />
    })
    return (
        <ul className="listing">
            {sandwiches}
        </ul> 
    )
}

export default SandList