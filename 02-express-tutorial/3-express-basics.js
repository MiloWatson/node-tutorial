const express = require('express')
const app = express()

const port = 5000

app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('Resource not found!')
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})
