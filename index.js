const express = require("express");

const server = express()

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://aabualqomboz_db_user:UE0T6vzd69Fc3BNV@cluster0.2p0t4v3.mongodb.net/?appName=Cluster0")
    .then(() => {
        console.log("Connected Successfully")

    }).catch((error) => {
        console.log("Error with connecting with the database", error)
    })

server.use(express.json())

server.listen(3000, () => {
    console.log("I'm listening in port 3000")
})

server.get("/hello", (req, res) => {
    res.send("Hello adham")
})

server.get("/hi", (req, res) => {
    res.send("you visited hi");
})

server.post("/addComment", (req, res) => {
    res.send("psot request on add comment")
})

server.get("/me", (req, res) => {
    res.send("Yes it's me")
})

server.put("/test", (req, res) => {
    res.send("hello world")
})

server.get("/numbers", (req, res) => {
    let numbers = "";
    for (let i = 0; i <= 100; i++) {
        if (i == 100) {
            numbers += i
        }
        else {
            numbers += i + " - "
        }
    }
    // res.send(__dirname + "/viwes/numbers.html");
    res.render("numbers.ejs", {
        name: "Adham",
        numbers: numbers
    });

    // another way
    // res.sendFile(__dirname + "/views/numbers.ejs");
})


server.get("/findSummaiton/:number1/:number2", (req, res) => {
    let num1 = req.params.number1
    let num2 = req.params.number2

    console.log(req.params)
    res.send(`The summation of the numbers is ${Number(num1) + Number(num2)}`)
})


server.get("/sayhello", (req, res) => {
    // let name = req.body
    // let age = req.query
    // console.log(req.body)
    // res.send(`Hello ${name.name} your age is ${age.age}`)

    res.json({
        name: req.body.name,
        age: req.query.age,
        languge: "Arabic"
    })
})

