import express from 'express'
import router from './router'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
    console.log('GET /')
    res.json({ message: 'hello' })
    res.status(200)
})

app.use('/api', router)

export default app