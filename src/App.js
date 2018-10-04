import React, { Component } from 'react';
import './App.css';

import SandList from './components/SandList'
import Nav from './components/Nav'
import AddSandForm from './components/AddSandForm'
import SelectOne from './components/SelectOne'
import ScrollToTop from './components/ScrollToTop'

import {BrowserRouter as Router, Route} from 'react-router-dom'  

const apiUrl = 'https://sandwich-server.herokuapp.com/sandwiches/'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       data: [],
       isLoaded: false,
       showForm: false,
       selectedImgId: 1
    }
  }

  loadData = () => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.data,
          isLoaded: true
        })
      })
  }

  componentDidMount() {
    this.loadData()
  }

  showUpdateForm = () => {
    const tog = !this.state.showForm
    this.setState({
        showForm: tog
    })
  }

  deleteOne = (id) => {
    const options = {
      method: 'DELETE',
      headers: new Headers({
          'content-type': 'application/json'
      })
    }

    fetch(apiUrl + id, options)
        .then(res => {
            return res.json()
        })
        .then(() => {
            const oldData = this.state.data
            const newData = oldData.filter(pose => {
              return !(id === pose.id)
            })
            this.setState({
              data: newData
            })
        })
  }

    selectId = (id) => {
      this.setState({
        selectedImgId: id
      })
    }
  

  render() {
    const isLoaded = this.state.isLoaded
    const showForm = this.state.showForm

    return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Nav showUpdateForm={this.showUpdateForm} />
          <Route exact path='/video' render={(props) => (
            <SelectOne {...props} data={this.state.data} selectedImgId={this.state.selectedImgId} />
          )} />
          {showForm ? <AddSandForm loadData={this.loadData}/>
                    : null}
          {isLoaded ? <SandList loadData={this.loadData} sands={this.state.data} deleteOne={this.deleteOne} showUpdateForm={this.showUpdateForm} selectId={this.selectId} /> 
                    : <h2 className="topPad">Loading...</h2>} 
                    
        </div>
      </ScrollToTop>
    </Router>
    );
  }
}

export default App;
