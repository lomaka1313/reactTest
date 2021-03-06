import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import API from '../actions/API'
import Books from '../components/Books'
import Authors from '../components/Authors'

require('jquery')

class App extends Component {
    constructor () {
        super();
        this.state = {
            books: [],
            authors:[]
        };
    }
    render() {
        return  (
            <div className="col-md-12">
                <Books books={this.state.books}/>
                <Authors authors={this.state.authors}/>
            </div>

        )
    }
    componentDidMount() {
        API.get.books((response)=> {
            this.setState({books:response})
        })
        API.get.authors((response)=> {
            this.setState({authors:response})
        })
    }
}

function mapStateToProps(state) {
    return {
        books:state,
        authors:state
    }
}


function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)