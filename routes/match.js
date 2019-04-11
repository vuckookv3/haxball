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
    let stats = users.map(e => e.getStats())
    stats = await Promise.all(stats);

    users = users.map(e => e.toObject())
    users = users.sort((a, b) => {
        const e = a.stats.victories - b.stats.victories
        return e;
    })
    const redTeam = [];
    const blueTeam = [];

    for (let i = 0; i < users.length; i++) {
        if (i % 2 == 0) {
            redTeam.push(users[i].name)
        } else {
            blueTeam.push(users[i].name)
        }
    }

    res.json({ redTeam, blueTeam })
}))

router.delete('/all', aW(async (req, res) => {
    let found = await Match.find().exec();
    found = found.map(e => e.remove())
    found = await Promise.all(found);
    res.json('ok')
}))




module.exports = router;