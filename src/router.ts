import { Router } from 'express'
import { body, validationResult } from 'express-validator'

const router = Router()

/**
 * User
 */
router.get('/user', (req, res) => {
    res.json({ message: req.shh_secret })
})

router.get('/user/:id', (req, res) => {
    res.json({ message: 'GET /user/:id' })
})

router.put('/user/:id', (req, res) => {})

router.post('/user', (req, res) => {})

router.delete('/user/:id', (req, res) => {})

/**
 * Product
 */
router.get('/product', (req, res) => {
    res.json({ message: 'GET /product' })
})

router.get('/product/:id', (req, res) => {})

router.put('/product/:id', body('name').isString(), (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    res.json({ message: 'PUT /product' })
})

router.post('/product', (req, res) => {})

router.delete('/product/:id', (req, res) => {})


export default router