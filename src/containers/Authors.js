import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import API from '../actions/API'
import { ButtonToolbar,DropdownButton,MenuItem } from 'react-bootstrap';

require('jquery')

class Authors extends Component {
    constructor () {
        super();
        this.state = {
            authors: []
        };
    }
    render() {
        return  (
            <div className="col-md-12">
                <h1>Автора</h1>
                {
                    this.state.authors.map(function(author) {
                        return (
                            <div className="col-md-4">
                                <p>{author.author}</p>

                                <ButtonToolbar>
                                    <DropdownButton bsStyle="default" title="Список действий" noCaret id="dropdown-no-caret">
                                        <MenuItem eventKey="1"><Link  to={`/authors/${author.author_id}`} >На страницу автора</Link></MenuItem>
                                        <MenuItem divider />
                                        <MenuItem eventKey="2">Another action</MenuItem>
                                        <MenuItem eventKey="3">Something else here</MenuItem>
                                        <MenuItem eventKey="4">Separated link</MenuItem>
                                    </DropdownButton>
                                </ButtonToolbar>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
    componentDidMount() {
        API.get.authors((response)=> {
            this.setState({authors:response})
        })
    }
}

function mapStateToProps(state) {
    return {
        authors:state
    }
}

export default connect(mapStateToProps)(Authors)