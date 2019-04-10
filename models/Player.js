const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const isInArrayM = (arr, id) => arr.some(e => e.equals(id));

PlayerSchema.methods.stats = async function () {
    const me = this._id;

    const matches = await model('Match').find({ $or: [{ redTeam: this._id }, { blueTeam: this._id }] }).lean().exec();
    let goals = 0;
    let ownGoals = 0;
    let redSide = 0;
    let blueSide = 0;
    let victories = 0;
    let defeats = 0;

    matches.map(e => {
        const winner = e.redScore > e.blueScore ? 'red' : 'blue';
        if (isInArrayM(e.redTeam, me)) {
            redSide++;
            if (winner == 'red') victories++;
            else defeats++;
        }
        else {
            blueSide++;
            if (winner == 'blue') victories++;
            else defeats++;
        }

        e.goals.map(g => {
            if (g.player.equals(me)) {
                if (!g.ownGoal) {
                    goals++;
                } else {
                    ownGoals++;
                }
            }
        })
    })
    const result = { matches: matches.length, victories, defeats, redSide, blueSide, goals, ownGoals }

    this.set('stats', result, { strict: false })
    return result;
}

PlayerSchema.pre('save', async function () {

});

PlayerSchema.pre('remove', async function () {

});

module.exports = model('Player', PlayerSchema);