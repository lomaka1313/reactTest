import React, { PropTypes, Component } from 'react'

export default class Authors extends Component {
    render() {
        const { name } = this.props
        return <div>
            <p>Привет, {name}!</p>
        </div>
    }
}

Authors.propTypes = {
    name: PropTypes.string.isRequired
}