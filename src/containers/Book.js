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
            book: {},
            authors:[]
        };
    }
    render() {
        const {book,authors} = this.state
        console.log(authors);
        if(authors.length>0){
            return  (
                <div className="col-md-12">
                    <div className="col-md-6">
                        <h1>{book.name}</h1>
                        <p><Link to="/genre" property={book.genre}>{book.genre}</Link></p>
                        <h3>Писатели</h3>
                        {
                            authors.map((author)=>{
                               return <p key={`authors_id_${author.authors_id}`}><Link to={`/authors/${author.authors_id}`}>{author.author}</Link></p>
                            })
                        }
                    </div>
                </div>

            )
        }else{
            return <div></div>
        }
    }
    componentDidMount() {
        const {id} = this.props.routeParams
        API.get.book(id,(response)=> {
            this.setState({book:response.book})
            this.setState({authors:response.authors})
        })
    }
}

function mapStateToProps(state) {
    return {
        book:state,
        authors:state
    }
}


function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)