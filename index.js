const express = require('express')
const app = express()
app.get("/", function (req, res) {
    res.send("hello world")
})
app.use('/static', express.static('static'))

app.listen(3000)