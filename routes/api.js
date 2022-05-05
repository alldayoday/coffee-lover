import { Router } from 'express'
const router = Router()
import * as apiCtrl from '../controllers/api.js'


router.post('/ingredients', apiCtrl.createIngredient)
router.get('/ingredients', apiCtrl.ingredientIndex)
router.delete('/ingredients/:id', apiCtrl.deleteIngredient)


export {
  router
}