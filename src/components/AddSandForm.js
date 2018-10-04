import React from 'react'

const apiUrl = 'https://sandwich-server.herokuapp.com/sandwiches'

class AddSandForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            imageURL: '',
            videoURL: ''
        }
    }

    postData = (e) => {
        e.preventDefault()
        const body = JSON.stringify(this.state)
        const options = {
            method: 'POST',
            body: body,
            headers: new Headers({
                'content-type': 'application/json'
            })
        }

        fetch(apiUrl, options)
            .then(res => res.json())
            .then(() => {
                this.props.loadData()
        })

        this.setState({
            name: '',
            description: '',
            imageURL: '',
            videoURL: ''
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
            <form className="positionForm" onSubmit={this.postData}> 
                    <div>
                        <label>Name:
                            <input className="inputAdd" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>Description:
                            <textarea className="inputAdd" type="text" name="description" value={this.state.description} onChange={this.handleChange} rows="6" cols="30"></textarea>
                        </label>
                    </div>
                    <div>
                        <label>Image URL:
                            <input className="inputAdd" type="text" name="imageURL" value={this.state.imageURL} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>Video Embed URL:
                            <input className="inputAdd" type="text" name="videoURL" value={this.state.videoURL} onChange={this.handleChange}/>
                        </label>
                    </div>
                <button className="formButton" type="submit">Add Sandwich</button>
            </form>
        )
    }
}

export default AddSandForm