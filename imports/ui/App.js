import React from 'react'
import PropTypes from 'prop-types'

import TitleBar from './TitleBar'
import AddPlayerForm from './AddPlayerForm'
import PlayerList from './PlayerList'

export default class App extends React.Component {

    render() {

        const { title, players } = this.props

        return (
                <React.Fragment>
                    <TitleBar title={title} />
                    <AddPlayerForm />
                    <PlayerList players={players} />
                </React.Fragment>
        )

    }

}

App.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
}