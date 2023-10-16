const userController = require('./controllers/userController')

const router = require('express').Router()

router.use('/user', userController)

module.exports = router