import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import API from '../actions/API'

require('jquery')

class Book extends Component {
    constructor () {
        super();
        this.state = {
            book: {}
        };
    }
    render() {
        const book = this.state.book
        return  (
            <div className="col-md-12">
                <div className="col-md-6">
                    <h1>{book.name}</h1>
                    <p><Link to={`/authors/${book.author_id}`}>{book.author}</Link></p>
                    <p><Link to="/genre" property={book.genre}>{book.genre}</Link></p>
                </div>
            </div>

        )
    }
    componentDidMount() {
        const {id} = this.props.routeParams
        API.get.book(id,(response)=> {
            this.setState({book:response})
        })
    }
}

function mapStateToProps(state) {
    return {
        book:state
    }
}


function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)