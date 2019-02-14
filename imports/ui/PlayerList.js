import React from 'react'
import PropTypes from 'prop-types'

import FlipMove from 'react-flip-move';

import Player from './Player'
import NoPlayers from './NoPlayers'

export default class PlayerList extends React.Component {

    /**
     * @description creates a Player component for each player in the players collection
     */
    renderPlayers = () => {

        const { players } = this.props // get players from props and store in players

        /**
         * @description check if there are players if no players render NoPlayers component else render Player component
         */
        if ( players.length === 0 ) {

            return <NoPlayers />

        } else {

            /**
         * @description map over the players array and create a Player component for each
         */
            return players.map(player => {

                const { _id } = player // get id from player and store in _id
                return <Player key={_id} player={player} /> // Player component pass player as prop

            })

        }

    }

    render() {

        return (
            <main style={{ position: 'relative' }}>
                <FlipMove 
                    typeName={null} 
                    easing='ease-in-out' 
                    maintainContainerHeight={true} 
                    delay={ 100 }
                    staggerDurationBy={ 20 }
                    staggerDelayBy={ 20 }
                >
                    {this.renderPlayers()}
                </FlipMove>
            </main>
        )

    }

}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}