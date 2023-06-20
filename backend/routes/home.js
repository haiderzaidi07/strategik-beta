const router = require('express').Router()
const homeController = require('../controllers/home')
const ensureAuth = require('../middleware/auth')

router.get('/xlzjoorD6C', homeController.getDashboard)
router.get('/contribute', homeController.getContribute)
router.post('/addCourse', ensureAuth, homeController.createCourse)
router.post('/contributing', ensureAuth, homeController.contributing)
router.post('/approveContribution', ensureAuth, homeController.approveContribution)
router.delete('/deleteContribution/:id', ensureAuth, homeController.deleteContribution)

module.exports = router