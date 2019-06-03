const express = require('express');
const router = express.Router();
const { Player } = require('../models');
const { aW, AppError } = require('../helpers');

// INDEX
router.get('/', aW(async (req, res) => {
    const all = await Player.find({}).exec();
    res.json(all);
}));


// CREATE
router.post('/', aW(async (req, res) => {
    console.log(req.body)
    const newPlayer = new Player({ ...req.body });
    const created = await Player.create(newPlayer);
    res.json(created);
}));

router.get('/table', aW(async (req, res) => {
    let found = await Player.find({}).select('name').exec();
    if (!found) throw new AppError(404);
    await Promise.all(found.map(e => {
        return e.getStats()
    }));
    found = found.map(e => e.toObject())
    found.forEach(e => {
        e.stats.score = Math.round(e.stats.victories / e.stats.matches * 100) || 0
        e.stats.goalsAvg = parseFloat((e.stats.goals / e.stats.matches).toFixed(1)) || 0
        e.stats.goalsPerMinute = parseFloat((e.stats.goals / e.stats.matches / 14).toFixed(1)) || 0
        e.stats.ownGoalsAvg = parseFloat((e.stats.ownGoals / e.stats.matches).toFixed(1)) || 0
    })
    found.sort((a, b) => {
        return b.stats.score - a.stats.score
    });
    res.render('table', { found });
}))


// SHOW
router.get('/:name', aW(async (req, res) => {
    const found = await Player.findOne({ name: req.params.name }).exec();
    if (!found) throw new AppError(404);
    await found.getStats();
    res.json(found);
}));


// UPDATE
router.put('/:id', aW(async (req, res) => {
    const found = await Player.findById(req.params.id).exec();
    if (!found) throw new AppError(404);

    found.set({ ...req.body });
    await found.save();

    res.json(found);
}));

router.delete('/:id', aW(async (req, res) => {
    const found = await Player.findOne({ name: req.params.id }).exec();
    if (!found) throw new AppError(404);
    await found.remove();
    res.json('ok')
}))


module.exports = router;