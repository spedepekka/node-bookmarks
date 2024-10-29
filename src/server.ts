import express from 'express'
import router from './router'

const app = express()

app.get('/', (req, res) => {
    console.log('GET /')
    res.json({ message: 'hello' })
    res.status(200)
})

app.use('/api', router)

export default app