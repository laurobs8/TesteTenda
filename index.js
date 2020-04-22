const express = require('express')
const connectDB = require('./config/db')

const app = express()

// database
connectDB()

app.use(express.json({extended: false}))

//routes
app.use('/', require("./routes/index"))
app.use('/api/url', require("./routes/url"))
app.use('/api/url', require("./routes/update"))

const PORT = 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))