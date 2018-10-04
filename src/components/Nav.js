import React from 'react'

const Nav = (props) => {
  
    return (
        <div className="nav">
            <div className="nav-head">
                <div className="nav-title"><img className="sandwichIcon" src="https://image.flaticon.com/icons/png/128/977/977727.png" alt=""/>the sandwich list</div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <input type="checkbox" id="nav-check"/>
            <div className="nav-links">
                <p onClick={props.showUpdateForm} className="line">add sandwich</p>
            </div>
        </div>
    )
}

export default Nav