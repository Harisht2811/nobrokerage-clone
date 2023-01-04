const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();



const { Client } = require('pg');
const client = new Client({
  host: 'localhost',
  user: 'developer',
  port: '5432',
  password: 'hari2811@',
  database: 'postgres'

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

app.get('/details/:id',async(req,res)=>{
  let currentUser = req.params.id
  res.setHeader('Content-Type', 'application/json');
client.query(`SELECT * FROM users where id=${currentUser}`,(err,result)=>{
  
if(result){
  //  console.log(result.rows,'re') 
    console.log((typeof result.rows))
    resu = JSON.stringify(result.rows)
   res.status(200).send(resu);
  //  res.send()
}
else{
  console.log(err.message)
}
});
// res.end()
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.post("/userdetails", (req, res) => {
  data = req.body
  console.log(data);
  data.phonenumber = parseInt(data.phonenumber)
  try {
    // client.connect();           // gets connection
    client.query(
      `INSERT INTO "users" ("name", "email","phone","role","password")  
                     VALUES ($1,$2,$3,$4,$5)`, [data.name, data.email, data.phonenumber, data.role, data.password]); // sends queries
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
app.post("/login", (req, res) => {
  loginData = req.body
  var email = loginData.email;
  var password = loginData.password;
  var postgres = 'SELECT * FROM users WHERE email= $1 AND password= $2';
  console.log("login Data", loginData.email)
  client.query(postgres, [email, password], function (err, result) {
    if (err) throw err;
    if (result.rows.length === 0) {
      console.log("Check your Email and Password")
      res.status(404).send({'status':'Not Found'});
    }
    else {
      console.log("login result", result);
      let userData = JSON.stringify(result.rows[0])
      res.status(200).send({'status':'Found','data':userData});
    }
  // res.end("done")
  });
  // console.log('we')
}
)


 
app.post("/userimages", (req, res) => {
  imageData = req.body
  console.log("image", imageData)
  // client.connect();           // gets connection
  client.query(
    `UPDATE "users"  SET userimage= $2 WHERE email= $1`, [imageData.email, [imageData.url]]); // sends queries

  res.end()
}
)
app.post("/propertycity", (req, res) => {
  propertyData = req.body
  console.log("city", propertyData)
  // client.connect();           // gets connection
  client.query(
    `UPDATE "users"  SET city= $2 WHERE email= $1`, [propertyData.email, propertyData.city]); // sends queries

  res.end()
}
)
app.post("/propertydetails", (req, res) => {
  userpropertyData = req.body
  console.log("dataproperty", userpropertyData.direction)
  // client.connect();           // gets connection
  client.query(
    `INSERT INTO "propertydetails" ("apartment", "BHK","floor","totalfloor","direction","age","area")  
                   VALUES ($1,$2,$3,$4,$5,$6,$7)`, [userpropertyData.apartment, userpropertyData.BHK, userpropertyData.floor, userpropertyData.totalfloor,
                    userpropertyData.direction,userpropertyData.age,userpropertyData.area]); // sends queries

  res.end()
}
)
client.connect();

