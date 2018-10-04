import React from 'react'

const apiUrl = 'https://sandwich-server.herokuapp.com/sandwiches/'

class UpdateSand extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            description: this.props.description,
            imageURL: this.props.imageURL,
            videoURL: this.props.videoURL
        }
    }

    putData = (e) => {
        e.preventDefault()
        const body = JSON.stringify(this.state)

        const options = {
            method: 'PUT',
            body: body,
            headers: new Headers({
                'content-type': 'application/json'
            })
        }

        fetch(apiUrl + this.props.id, options)
            .then(res => {
                return res.json()
            })
            .then(() => {
                this.props.loadData()
            })
    }

    handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        this.setState({
            [key]: value
        })
    }

    render() {
        return (
            <form className="updateForm" onSubmit={this.putData}  > 
                    <div>
                        <label>Name:
                            <input className="inputUpdate" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>Description:
                            <textarea className="inputUpdate" type="text" name="description" value={this.state.description} onChange={this.handleChange} rows="3" cols="20"></textarea>
                        </label>
                    </div>
                    <div>
                        <label>Image URL:
                            <input className="inputUpdate" type="text" name="imageURL" value={this.state.imageURL} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>Video Embed URL:
                            <input className="inputUpdate" type="text" name="videoURL" value={this.state.videoURL} onChange={this.handleChange}/>
                        </label>
                    </div>
                <button className="formButton" type="submit">Update</button>
            </form>
        )
    }
}

export default UpdateSand