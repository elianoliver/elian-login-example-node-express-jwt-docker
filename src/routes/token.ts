import { Router } from 'express'
import jwt from 'jsonwebtoken'

const router = Router()
const secretKey = process.env.TOKEN_SECRET
const expiresIn = process.env.TOKEN_EXPIRES_IN || '1h'

if (!secretKey) {
  console.error('❌ Secret key not found')
  process.exit(1)
}

router.get('/token', (req, res) => {
  const payload = { id: 1, name: 'John Doe' }
  const token = jwt.sign(payload, secretKey, { expiresIn })
})

router.post('/token', (req, res) => {

})

router.put('/token', (req, res) => {

})

router.delete('/token', (req, res) => {

})

export default router
