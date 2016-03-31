import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import API from '../actions/API'

require('jquery')

class Author extends Component {
    constructor () {
        super();
        this.state = {
            author: {}
        };
    }
    render() {
        const author = this.state.author
        return  (
            <div className="col-md-12">
                <div className="col-md-6">
                    <h1>{author.name}</h1>
                    <p><Link to={`/authors/${author.author_id}`}>{author.author}</Link></p>
                </div>
            </div>

        )
    }
    componentDidMount() {
        const {id} = this.props.routeParams
        API.get.author(id,(response)=> {
            this.setState({author:response})
        })
    }
}

function mapStateToProps(state) {
    return {
        author:state
    }
}


function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Author)