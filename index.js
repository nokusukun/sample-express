
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const host = process.env.HOST

app.listen(host, () => {
    console.log(`Example app listening at ${host}`)
})