import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import API from '../actions/API'
import {ButtonGroup,Button} from '../actions/API'

var $ = require('jquery')


class App extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
            filteredBooks: [],
            genres: []
        };
    }

    filterBooks(e){
        $(e.target).addClass('active').siblings().removeClass('active')
        let genre = e.target.innerText;
        let filteredBooks = this.state.books.filter((val,i)=>{
            return val.genre === genre
        })
        this.setState({filteredBooks:filteredBooks})
    }

    render() {

        const {filteredBooks,genres} = this.state;
        if(genres.length>0){

            return (
                <div className="col-md-12">
                    <div className="btn-group" role="group" >
                        {
                            genres.map((genre,i)=>{
                                if(i==0)
                                    return <button type="button" className="btn btn-default active" onClick={this.filterBooks.bind(this)}>{genre}</button>
                                else
                                    return <button type="button" className="btn btn-default" onClick={this.filterBooks.bind(this)}>{genre}</button>

                            })
                        }
                    </div>
                    {
                        filteredBooks.map((book)=> {
                            return (
                                <div key={`book_list_id_${book.id}`}>
                                    <p>Название</p>
                                    <Link to={`/books/${book.id}`}>{book.name}</Link>

                                    <p>Автора</p>
                                    {
                                        book.authors.map((author)=> {
                                            return <Link key={`author_id_list_${author.id}`}
                                                         to={`/authors/${author.author_id}`}>{author.author}</Link>
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            )
        }else{
            return <div></div>
        }
    }

    componentDidMount() {
        API.get.books((response)=> {
            let array = [];
            response.forEach((el, i, arr)=> {
                if (array.indexOf(el.genre) == -1)array.push(el.genre)
            })
            let fBooks = response.filter((val,i)=>{
                return val.genre === array[0]
            })
            this.setState({genres: array})
            this.setState({filteredBooks:fBooks})
            this.setState({books: response})
        })
    }
}

function mapStateToProps(state) {
    return {
        books: state,
        filteredBooks: state,
        genres:state
    }
}


function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)