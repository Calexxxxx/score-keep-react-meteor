import React from 'react'
import PropTypes from 'prop-types'

export default class TitleBar extends React.Component {

    render() {

        const { title } = this.props // get title from props

        return (
            <header>
                <h1>{ title }</h1>
            </header>
        )
        
    }

}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired
}