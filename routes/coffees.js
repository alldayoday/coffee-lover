import { Router } from 'express'
const router = Router()
import * as coffeesCtrl from '../controllers/coffees.js'
import { isLoggedIn } from '../middleware/middleware.js'

router.get('/', coffeesCtrl.index)
router.post('/', isLoggedIn, coffeesCtrl.create)
router.get('/:id', coffeesCtrl.show)
router.patch('/:id/flip-hot', isLoggedIn, coffeesCtrl.flipHot)
router.get('/:id/edit', isLoggedIn, coffeesCtrl.edit)
router.put('/:id', isLoggedIn, coffeesCtrl.update)
router.delete('/:id', isLoggedIn, coffeesCtrl.delete)

export {
  router
}