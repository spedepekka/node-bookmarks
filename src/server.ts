import express from 'express'
import router from './router'
import morgan from 'morgan'
import { protect } from './modules/auth'
import { createNewUser, signin } from './handlers/user'

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

app.post('/user', createNewUser)
app.post('/signin', signin)

app.use((err, req, res, next) => {
    if (err.type === 'auth') {
        res.status(401).json({ message: 'unauthorized' })
    } else if (err.type === 'input') {
        res.status(400).json({ message: 'invalid input' })
    } else {
        console.error(err)
        res.status(500).json({ message: 'something went wrong' })
    }
})

export default app