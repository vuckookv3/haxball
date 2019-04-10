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


// SHOW
router.get('/:name', aW(async (req, res) => {
    const found = await Player.findOne({ name: req.params.name }).exec();
    if (!found) throw new AppError(404);
    await found.stats();
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