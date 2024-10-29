import express from 'express'
import router from './router'
import morgan from 'morgan'
import { protect } from './modules/auth'

const app = express()

const customLogger = (myenv) => (req, res, next) => {
    console.log(`${myenv} ${req.method} ${req.path}`)
    next()
}

app.use(customLogger('STAGING'))

// Logging
app.use(morgan('dev'))
// Client can send JSON
app.use(express.json())
// Client can send URL encoded data
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    req.shh_secret = 'doggy'
    next()
})

app.get('/', (req, res) => {
    console.log('GET /')
    res.json({ message: 'hello' })
    res.status(200)
})

app.use('/api', protect, router)

export default app