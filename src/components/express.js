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
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.post("/userdetails",(req,res)=>{
    data = req.body
    // var name= data.name
    // var email = data.email
    // var phone = data.phone 
    // var role = data.role
    // var password = data.password

    data.phonenumber = parseInt(data.phonenumber)
    console.log(data)
    try {
                // client.connect();           // gets connection
         client.query(
                    `INSERT INTO "users" ("id","name", "password","role","email","phone")  
                     VALUES ($1, $2,$3,$4,$5)`,[data.name,data.password,true,data.email,data.phonenumber]); // sends queries
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

    client.connect();           // gets connection
//     client.query(`INSERT INTO "users" ("name", "email", "phone", "role", "password") VALUES`, [name , email, phone, role, password], 
//     function (err, result) 
//     {
//         if (err) throw err;
//         console.log("1 record inserted");
//         res.end(result)
//     });
// })

// const insertUser = async (
//     data,
    
// //    id=2, name='harish',password='12345',role=true,email='harish@gmail.com',phonenumber='12345'
      
// ) => {
//     try {
//         // await client.connect();           // gets connection
//         await client.query(
//             `INSERT INTO "users" ("id","name", "password","role","email","phone")  
//              VALUES ($1, $2,$3,$4,$5,$6)`, [data]); // sends queries
//         return true;
        
//     } catch (error) {
//         console.error(error.stack);
//         return false;
//     } finally {
//         await client.end();               // closes connection
//     }
// };

// insertUser().then(result => {
//     if (result) {
//         console.log('User inserted');
//     }
// });
// // client.connect();
client.query(`Select * from users`,(err,res)=>{
    if(!err){
        console.log(res.rows)
    }
    else{
        console.log(err.message)
    }
    client.end
    console.log(client)
})