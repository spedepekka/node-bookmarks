import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import { handleInputErrors } from './modules/middleware'

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

router.put('/product/:id', body('name').isString(), handleInputErrors, (req, res) => {
    res.json({ message: 'PUT /product' })
})

router.post('/product', body('name').isString(), handleInputErrors, (req, res) => {
    res.json({ message: 'POST /product' })
})

router.delete('/product/:id', (req, res) => {})


export default router