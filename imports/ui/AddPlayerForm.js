import React from 'react'
import { Players } from './../api/players'

export default class AddPlayerForm extends React.Component {

    /**
     * @description Handles adding player to mongoDB upon button click
     * @param {*} evt 
     */
    handleAddPlayer( evt ) {

        /** 
         * @description Prevent browser reload 
         */
        evt.preventDefault()

        /**
         *  @description Store the value from the input in playerName 
         */
        let playerName = evt.target.playerName.value

        /**
         * @description Check if the playerName exists
         * Empty the form by setting its value to empty string
         * Insert the player into mongoDB
         * @param { string } playerName
         */
        if ( playerName ) {
            evt.target.playerName.value = ''
            Players.insert( {
                name: playerName,
                score: 0
            } )
        }

    }

    render() {

        return (
            <form onSubmit={ this.handleAddPlayer } autoComplete='off'>
                
                <input type="text" name="playerName" placeholder='  '/>
                <label>
                    Player Name
                </label>
                <button>Add Player</button>
            </form>
        )

    }

}