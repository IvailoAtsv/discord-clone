const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: [true, 'username is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    }
})

userSchema.virtual('repeatPassword').set(function (value) {
    if (value != this.password) {
        throw new mongoose.MongooseError('Passwords don\'t match')
    }
})

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
})

const User = mongoose.model('User', userSchema)

module.exports = User