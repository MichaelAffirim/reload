// Uses ExpressJS https://expressjs.com/
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.listen(port, () => console.log(`Library app listening on port ${port}`))