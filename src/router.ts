import { Router } from 'express'

const router = Router()

/**
 * User
 */
router.get('/user', (req, res) => {
    res.json({ message: 'GET /user' })
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

router.put('/product/:id', (req, res) => {})

router.post('/product', (req, res) => {})

router.delete('/product/:id', (req, res) => {})


export default router