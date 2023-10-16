const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')
const User = require('../models/User')
const { secret } = require('../config/config')

// register one admin then return to comment
exports.register = (userData) => User.create(userData)

exports.login = async (user, password) => {
    const currentUser = await User.findOne({ user })
    if (!currentUser) {
        return new Error('Cannot find username or password')
    }
    const isValid = await bcrypt.compare(password, currentUser.password)
    if (!isValid) {
        return new Error('Cannot find username or password')
    }

    const payload = {
        _id: currentUser._id,
        user: currentUser.user
    }
    const token = jwt.sign(payload, secret, { expiresIn: '2h' })

    return token
}