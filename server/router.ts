import { Router } from 'express'
import { main, giveData } from './api'

const router = Router()

router.post('/', main)
router.get('/data', giveData)

export default router
