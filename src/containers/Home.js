import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import API from '../actions/API'
require('jquery')

class App extends Component {

    fetch() {
    }

    render() {
        return <div>Home!</div>
    }
    componentDidMount() {
        API.get.books((response)=> {
            console.log(response)
            return response
        })
    }
}

function mapStateToProps(state) {
    return {

    }
}


function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)