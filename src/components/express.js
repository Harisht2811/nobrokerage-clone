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

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.get('/details/:id',async(req,res)=>{
  let currentUser = req.params.id
  res.setHeader('Content-Type', 'application/json');
client.query(`SELECT * FROM users where id=${currentUser}`,(err,result)=>{
  
if(result){
    console.log((typeof result.rows))
    resu = JSON.stringify(result.rows)
   res.status(200).send(resu);
}
else{
  console.log(err.message)
}
});
})



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.post("/userdetails", (req, res) => {
  data = req.body
  console.log(data);
  data.phonenumber = parseInt(data.phonenumber)
  try {
    client.query(
      `INSERT INTO "users" ("name", "email","phone","role","password")  
                     VALUES ($1,$2,$3,$4,$5)`, [data.name, data.email, data.phonenumber, data.role, data.password]); // sends queries
  }


  catch (error) {
    console.error(error.stack);
  } finally {
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
  });
}
)


 
app.post("/userimages", (req, res) => {
  imageData = req.body
  console.log("image", imageData.url)
  client.query(
    `UPDATE "users"  SET userimage= $2 WHERE email= $1`, [imageData.email, [imageData.url]]); // sends queries
     res.end()
}
)

app.post("/tenantcity", (req, res) => {
  cityData = req.body
  console.log(cityData)
  let postgres = `SELECT * FROM "users" WHERE city=$1`
  client.query(
     postgres ,[cityData.city],function(err,result){
      if (result.rows.length === 0) {
        res.status(404).send({'status':'Not Found'});
      }
      else {
        console.log("login result", result);
        let cityData = JSON.stringify(result.rows[0])
        res.status(200).send({'status':'Found','data':cityData});
      }
    }); 
}
)
app.post("/getproperty",(req,res)=>{
  tenantCity = req.body
  console.log(tenantCity)
  let postgres = `SELECT * FROM "propertydetails" WHERE city=$1` 
  client.query(
    postgres,[tenantCity.city],function(err,result){
      if(result.rows.length === 0){
        res.status(404).send({'status':'Not Found'})
      }
      else{
        console.log("prop result", result);
        let tenantData = JSON.stringify(result.rows)
        res.status(200).send({'status':'Found','data':tenantData});
      }
    }
  )
}
)
app.post("/propertycity", (req, res) => {
  propertyData = req.body
  client.query(
    `UPDATE "users"  SET city= $2 WHERE email= $1`, [propertyData.email, propertyData.city]); 

  res.end()
}
)


app.post("/propertydetails", (req, res) => {
  userpropertyData = req.body
  console.log("dataproperty", userpropertyData)
  client.query(
    `INSERT INTO "propertydetails" ("city","apartment", "BHK","floor","totalfloor","direction","age","area")  
                   VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`, [userpropertyData.city,userpropertyData.apartment, userpropertyData.BHK, userpropertyData.floor, userpropertyData.totalfloor,
                    userpropertyData.direction,userpropertyData.age,userpropertyData.area]); 
  res.end()
}
)
client.connect();

