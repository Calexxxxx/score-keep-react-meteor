import React from 'react'
import PropTypes from 'prop-types'

import { Players } from './../api/players'

export default class Player extends React.Component {

    render() {

        const { _id, name, score, rank, position } = this.props.player // get _id, name, score from props
        let itemClassName = `item--position-${rank}` // create class based on rank for differen background colors
        let points // to store the point(s) text

        /**
         * @description check if score is greater than 1 or less than or equal to 0 than return 'points' else 'point'
         */
        if ( score > 1 || score <= 0 ) {
            points = 'points'
        } else {
            points = 'point'
        }

        /**
         * @description increases the players score by one and updates the document
         */
        const increaseScore = () => Players.update( _id, { $inc: { score: 1 } } )
        /**
         * @description decreases the players score by one and updates the document
         */
        const decreaseScore = () => Players.update( _id, { $inc: { score: -1 } } )
        /**
         * @description deletes the player from the collection
         */
        const deletePlayer = () => Players.remove( _id )

        return (
            <section key={ _id } className={itemClassName}>
                <div className='text__group'>
                    <h2 className='text__title'>{name}</h2>
                    <p className='text'>{ position } place with ( { score } {points} ).</p>
                </div>

                <div className='button__group'>
                    <button className='button button--subtract' onClick={decreaseScore}>-1</button>
                    <button className='button button--add' onClick={increaseScore}>+1</button>
                    <button className='button button--remove' onClick={deletePlayer}>X</button>
                </div>
            </section>
        )

    }

}

Player.propTypes = {
    player: PropTypes.object.isRequired
}