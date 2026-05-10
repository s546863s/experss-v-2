const express = require("express");

const app = express();


const port = process.env.PORT || 8000;

const products = [
    {
        name: "Samsang galaxy A5",
        price: 14000
    }
]

app.get("/", (req, res) =>{
    res.send("hello world!")
} )

app.get("/mama", (req, res) =>{
    res.send("How are you !")
})

app.get("/product", (req, res) =>{
    res.send(products)
})

app.listen(port, () =>{
    console.log(`Server is running on pot ${port}`);
})



