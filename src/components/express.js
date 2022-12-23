const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();



const {Client} = require('pg');
const client = new Client({
    host:'localhost',
    user:'developer',
    port:'5432',
    password:'hari2811@',
    database:'postgres'

})


app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// simple route
app.get("/userdetails", (req, res) => {
  res.json({ message: "Welcome to bezkoder application.","request":req});
  try{
    client.query(`SELECT email,password FROM users `,(err,res)=>{
        if(!err){
            console.log("data",res.rows)
        }
        else{
            console.log(err.message)
        }
        client.end
        console.log(client)
    }
   
    )
   
  }
  catch(err){
    console.log(err)
}
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.post("/userdetails",(req,res)=>{
    data = req.body
    console.log(data);
    data.phonenumber = parseInt(data.phonenumber)
    try {
                // client.connect();           // gets connection
         client.query(
                    `INSERT INTO "users" ("name", "email","phone","role","password")  
                     VALUES ($1,$2,$3,$4,$5)`,[data.name,data.email,data.phonenumber,data.role,data.password]); // sends queries
         }
         
                // return true;
                
             catch (error) {
                console.error(error.stack);
                // return false;
            } finally {
            //  client.end();               // closes connection
            }
    res.end()
})

client.connect();         


