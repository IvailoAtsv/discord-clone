const router = require('express').Router()
const userManager = require('../managers/userManager')


router.post('/register', async (req, res) => {
    const { user, password, repeatPassword } = req.body

    await userManager.register({ user, password, repeatPassword })
    res.end()
})

router.post('/login', async (req, res) => {
    const { user, password } = req.body
    try {
        token = await userManager.login(user, password)
    } catch (err) {
        res.end(err);
    }
    res.cookie('auth', token, { httpOnly: false })
    res.end()
})

module.exports = router