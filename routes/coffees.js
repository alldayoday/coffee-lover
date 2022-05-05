import { Router } from 'express'
const router = Router()
import * as coffeesCtrl from '../controllers/coffees.js'
import { isLoggedIn } from '../middleware/middleware.js'

router.get('/', coffeesCtrl.index)
router.post('/', isLoggedIn, coffeesCtrl.create)
router.get('/:id', coffeesCtrl.show)

export {
  router
}