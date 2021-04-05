const express = require("express")

const app = express()

const port = 5000

app.get("/", (req,res) =>{
    res.send("welcome home dear")
})
app.post("/api/login", (req,res) =>{
    res.send("hello there")
})
app.put("/api/signin", (req,res) =>{
    res.send("welcome home")
})
app.delete("/api/login/delet", (req,res) =>{
    res.send("welcome my home dear")
})

app.listen(port, () => (`server started on this port ${port}`))