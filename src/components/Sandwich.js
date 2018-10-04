import React from 'react'
import UpdateSand from './UpdateSand'
import {Link} from 'react-router-dom'


class Sandwich extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            upForm: false
        }
    }

    newShowUpdateForm = () => {
        const tog = !this.state.upForm
        this.setState({
            upForm: tog
        })
    }

    render() {
        const upForm = this.state.upForm
        
        return (
            <li>
                <Link to='/video'><img onClick={() => this.props.selectId(this.props.id)} className="resp" src={this.props.imageURL} alt=""/></Link>
                <div className="body">
                    <p className="imgClick">click image for video recipe</p>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.description}</p>
                </div>
                <div className="cta">
                    <p onClick={this.newShowUpdateForm}>Update Sandwich</p>
                    <p onClick={() => this.props.deleteOne(this.props.id)} >Delete Sandwich</p>
                </div>
                {upForm ? <UpdateSand videoURL={this.props.videoURL} imageURL={this.props.imageURL} description={this.props.description} name={this.props.name} loadData={this.props.loadData} id={this.props.id}/> : null}
            </li>
        )
    }
}

export default Sandwich