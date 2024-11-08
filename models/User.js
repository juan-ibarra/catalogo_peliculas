const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'comun'], default: 'comun' },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
