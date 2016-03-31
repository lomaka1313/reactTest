import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import API from '../actions/API'

require('jquery')


class App extends Component {
    constructor () {
        super();
        this.state = {
            books: []
        };
    }
    render() {
        return  (
            <div></div>
        )
    }
    componentDidMount() {
        API.get.books((response)=> {
            this.setState({books:response})
        })
    }
}

function mapStateToProps(state) {
    return {
        books:state
    }
}


function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)