
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log("This is a test from", process.env.MESSAGE)
    res.send(' This is a message from -> ' + process.env.MESSAGE)
})

const _host = process.env.APP_HOST
const host = _host.split(":")[0]
const port = Number(_host.split(":")[1])

app.listen(port, host, () => {
    console.log(`Example app listening at ${host}:${port}`)
})
