import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

export default class Books extends Component {
    render() {
        const books = this.props.books;
        if (books.length>0){
            return (
                <div className="col-md-6">
                    <h1>Книги</h1>
                    {
                        books.map(function(book) {
                            return (
                                <div key={`book_id_${book.id}`}>
                                    <p>Название</p>
                                    <Link to={`/books/${book.id}`}>{book.name}</Link>
                                    <p>Автора</p>
                                    {
                                        book.authors.map((author)=>{
                                            return <Link to={`/authors/${author.author_id}`}>{author.author}</Link>
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
        else{
            return <div></div>
        }
    }
}

Books.propTypes = {
    books: PropTypes.array.isRequired
}