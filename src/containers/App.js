import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Authors from '../components/User'
import Books from '../components/Page'
import * as pageActions from '../actions/PageActions'

class App extends Component {
    render() {
        console.log(this.props);
        const { authors, books } = this.props
        const { setYear } = this.props.pageActions

        return <div>
            <Authors name={authors.name} />
            <Books photos={books.photos} year={books.year} setYear={setYear} />
        </div>
    }
}

function mapStateToProps(state) {
    return {
        authors: state.user,
        books: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)