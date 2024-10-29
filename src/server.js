import express from 'express'

const app = express()

app.get('/', (req, res) => {
    console.log('GET /')
    res.json({ message: 'hello' })
    res.status(200)
})

export default app