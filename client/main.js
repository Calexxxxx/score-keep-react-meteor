import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players, calculatePlayerRank } from './../imports/api/players'

import App from './../imports/ui/App'

Meteor.startup(() => {

    Tracker.autorun(() => {

        const players = Players.find( { }, { sort: { score: -1 } } ).fetch() // fecthing all players from mongoDB and sort them based on points

        let positionPlayers = calculatePlayerRank(players)
        const title = 'Score keep App'

        ReactDOM.render(<App title={title} players={ positionPlayers } />, document.getElementById('app'))

    })

})