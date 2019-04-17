const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const { Match, Player } = require('../models');
const { aW, AppError } = require('../helpers');

// route/to/this

// INDEX
router.get('/', aW(async (req, res) => {
    const all = await Match.find({}).exec();
    res.json(all);
}));


// CREATE
router.post('/', aW(async (req, res) => {
    const newMatch = new Match({ ...req.body });
    const created = await Match.create(newMatch);
    res.json(created);
}));

router.get('/balance', aW(async (req, res) => {
    let { players } = req.query;
    if (!players) throw new AppError(400);
    players = players.split(',')
    let users = await Player.find({ _id: { $in: players } }).exec();
    await Promise.all(users.map(e => e.getStats()));

    users = users.map(e => e.toObject())
    users = users.sort((a, b) => {
        const e = Math.round(a.stats.victories / a.stats.matches * 100) - Math.round(b.stats.victories / b.stats.matches * 100)
        return e;
    })
    users = users.reverse();
    let redTeam = [];
    let blueTeam = [];
    // const newUsers = [...users];
    // let i = 0;

    if (players.length == 6) {
        redTeam = [users[0].name, users[3].name, users[4].name]
        blueTeam = [users[1].name, users[2].name, users[5].name];
    } else if (players.length == 8) {
        redTeam = [users[0].name, users[3].name, users[4].name, users[7].name]
        blueTeam = [users[1].name, users[2].name, users[5].name, users[6].name]
    }

    // for (let i = 0; i < newUsers.length; i++) {
    //     const first = newUsers.shift();
    //     const last = newUsers.pop();
    //     if (newUsers.length > 0) {

    //     }
    //     // if (i % 2 == 0) {
    //     //     redTeam.push(users[i].name)
    //     // } else {
    //     //     blueTeam.push(users[i].name)
    //     // }
    // }
    console.log({ redTeam, blueTeam })
    res.json({ redTeam, blueTeam })
}))

router.delete('/all', aW(async (req, res) => {
    let found = await Match.find().exec();
    found = found.map(e => e.remove())
    found = await Promise.all(found);
    res.json('ok')
}))




module.exports = router;