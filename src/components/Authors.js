import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

export default class Authors extends Component {
    render() {
        const { authors } = this.props
        console.log(authors);
        return (
            <div className="col-md-6">
                <h1>Автора</h1>
                {
                    authors.map(function(author) {
                        return (
                            <div key={`authors_list_id_${author.author_id}`}>
                                <p>Автор</p>
                                <Link to={`/authors/${author.author_id}`}>{author.author}</Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

Authors.propTypes = {
    authors: PropTypes.array.isRequired
}