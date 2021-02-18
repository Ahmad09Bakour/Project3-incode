const express = require("express")
const morgan = require("morgan")
const data = require("./data")

const app = express()

app.set("view engine", "ejs")
app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.send("Welcome to our schedule website")
})

app.get("/users", (req, res) => {
    res.json(data.users)
})

app.get("/schedules", (req, res) => {
    res.json(data.schedules)
})


app.listen(3001, () => {
    console.log('listening on 3001')
  })