const express = require('express')
const { parser } = require('../helpers/multer')
const heroesRouter = require('../controllers/heroesController')
const router = express.Router()

router.route('/create').post(heroesRouter.createHeroes)
router.route('/getheroes').get(heroesRouter.getHeroes)
router.route('/update/:id').patch(heroesRouter.updateHeroes)
router.route('/delete/:id').delete(heroesRouter.deleteHeroe)
router.route('/upload/:id').post(parser.single('myFile'), heroesRouter.upload)
router.route('/getinfo').get(heroesRouter.getInfo)

module.exports = router
