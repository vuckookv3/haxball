const mongoose = require('mongoose');
const { Schema } = mongoose;

const MatchSchema = new Schema({
    date: {
        type: Date,
        default: () => Date.now(),
    },
    redTeam: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
    blueTeam: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
    redScore: {
        type: Number,
        required: true,
    },
    blueScore: {
        type: Number,
        required: true,
    },
    goals: [{
        _id: false,
        player: { type: Schema.Types.ObjectId, ref: 'Player' },
        ownGoal: Boolean,
    }]

});

MatchSchema.pre('save', async function () {

});

MatchSchema.pre('remove', async function () {

});

module.exports = mongoose.model('Match', MatchSchema);