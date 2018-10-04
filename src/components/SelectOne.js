import React from 'react'
import {Link} from 'react-router-dom'
     
const SelectOne = (props) => {
    if(props.data.length > 0){

        let selectedSandwich = props.data.filter(asana => {
            return asana.id === props.selectedImgId
        })
        return (
            <div className="one">
                <div className="as if">
                    <iframe className="bonk" src={selectedSandwich[0].videoURL} allowFullScreen></iframe>
                </div>
                <div className="body">
                    <h3>How to make a {selectedSandwich[0].name} sandwich - <Link to='/'><button className="formButton">Exit Video</button></Link></h3>
                    <p>{selectedSandwich[0].description}</p>
                </div>
                <div className="cta"></div>
            </div>
        )
    } else {return <div></div>}
}

export default SelectOne