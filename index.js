const express = require("express");

const app = express();
const cors = require('cors')

const port = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(express.json())



const users = [
  {
    id: 1,
    name: "Rahim Uddin",
    email: "rahim@gmail.com",
    age: 22,
    city: "Dhaka",
  },
  {
    id: 2,
    name: "Karim Hasan",
    email: "karim@gmail.com",
    age: 25,
    city: "Chattogram",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    email: "nusrat@gmail.com",
    age: 21,
    city: "Khulna",
  },
  {
    id: 4,
    name: "Sadia Islam",
    email: "sadia@gmail.com",
    age: 24,
    city: "Rajshahi",
  },
  {
    id: 5,
    name: "Tanvir Ahmed",
    email: "tanvir@gmail.com",
    age: 27,
    city: "Sylhet",
  },
  {
    id: 6,
    name: "Mim Akter",
    email: "mim@gmail.com",
    age: 20,
    city: "Barishal",
  },
  {
    id: 7,
    name: "Fahim Hossain",
    email: "fahim@gmail.com",
    age: 26,
    city: "Cumilla",
  },
  {
    id: 8,
    name: "Jannat Ara",
    email: "jannat@gmail.com",
    age: 23,
    city: "Rangpur",
  },
  {
    id: 9,
    name: "Arif Khan",
    email: "arif@gmail.com",
    age: 28,
    city: "Mymensingh",
  },
  {
    id: 10,
    name: "Sumaiya Rahman",
    email: "sumaiya@gmail.com",
    age: 22,
    city: "Gazipur",
  },
];


app.post('/users', (req, res) =>{
  console.log("Data in The Request:", req.body)

  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send({
    success: true,
    data: newUser,
    massage:"User added Successfully"})
})

app.get("/", (req, res) =>{
    res.send("hello world!")
} )

app.get("/mama", (req, res) =>{
    res.send("How are you !")
})

app.get("/product", (req, res) =>{
    res.send(products)
})
app.get("/users", (req, res) =>{
    res.send(users)
})

app.listen(port, () =>{
    console.log(`Server is running on pot ${port}`);
})



