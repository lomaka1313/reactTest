import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import API from '../actions/API'

require('jquery')

class Author extends Component {
    constructor() {
        super();
        this.state = {
            author: {}
        };
    }

    render() {
        const {author} = this.state
        if (author.name) {
            return (
                <div className="col-md-12">
                    <div className="col-md-6">
                        <h1>{author.name}</h1>

                        <h3>Книги автора</h3>
                        {
                            author.books.map((book)=> {
                                return <p key={`book_id_${book.id}`}><Link to={`/books/${book.id}`}>{book.name}</Link>
                                </p>
                            })
                        }
                    </div>
                </div>

            )
        }
        else {
            return (<div></div>)
        }
    }

    componentDidMount() {
        const {id} = this.props.routeParams
        API.get.author(id, (response)=> {
            this.setState({author: response})
        })
    }
}

function mapStateToProps(state) {
    return {
        author: state
    }
}


function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Author)