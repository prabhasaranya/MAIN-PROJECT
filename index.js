require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel=require("./models/Register");
const UserModel=require("./models/User");

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

// DATABASE CONNECTION
mongoose.connect(process.env.DB_CONNECTION_STRING, {});

const database = mongoose.connection;
database.on('error', (err) => console.log(err));
database.on("connected", () => console.log('Database Connected'));

//Post method for Login page
app.post("/login", (req, res) => {
  const { username, password } = req.body;
 UserModel.findOne({ username: username })
.then(user=>{
  if(user){
    if(user.password===password){
      res.json("Login Successfully")
      
    }else{
      res.json("The password is incorrect")
    }
  }else{
    res.json( "No Record existed")
}

})
})

//Post method for Ticket Create page
app.post('/create',(req,res)=> {
  const{name,empid,department,email,contactno,title,priority,issue}=req.body;
  RegisterModel.create({name:name ,empid:empid,department: department,email:email,contactno:contactno,title:title,priority:priority,issue:issue})
  .then(result=> { 
    res.send({
      success:true,
      message:"Ticket Created Successfully",
    });
    res.json("Ticket created")})
  .catch(err=> res.json(err))
}) 

//Get Method for Daily report page
app.get('/daily',(req,res)=>{
  RegisterModel.find()
  .then(registers=>res.json(registers))
   .catch(err=>res.json(err))
})

// PORT LISTEN
app.listen(port, () => {
  console.log("Listening to port " + port);
})
