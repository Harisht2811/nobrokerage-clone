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

app.get('/details/:id', async (req, res) => {
  let currentUser = req.params.id
  res.setHeader('Content-Type', 'application/json');
  client.query(`SELECT * FROM users where id=${currentUser}`, (err, result) => {

    if (result) {
      console.log((typeof result.rows))
      resu = JSON.stringify(result.rows)
      res.status(200).send(resu);
    }
    else {
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
      res.status(404).send({ 'status': 'Not Found' });
    }
    else {
      console.log("login result", result);
      let userData = JSON.stringify(result.rows[0])
      res.status(200).send({ 'status': 'Found', 'data': userData });
    }
  });
}
)






app.post("/getproperty", (req, res) => {
  tenantCity = req.body
  console.log(tenantCity)
  let postgres = `SELECT * FROM "propertydetails" WHERE city=$1`
  client.query(
    postgres, [tenantCity.city], function (err, result) {
      if (result.rows.length === 0) {
        res.status(404).send({ 'status': 'Not Found' })
      }
      else {
        console.log("prop result", result);
        let tenantData = JSON.stringify(result.rows)
        res.status(200).send({ 'status': 'Found', 'data': tenantData });
      }
    }
  )
}
)


app.post("/ownerproperty", (req, res) => {
  ownerProps = req.body
  let ownerid = ownerProps.ownerid
  let postgres = `SELECT * FROM "propertydetails" WHERE ownerid=${ownerid}`
  client.query(
    postgres, function (err, result) {
      if (result.rows.length === 0) {
        res.status(404).send({ 'status': 'Not Found' })
      }
      else {
        console.log("prop result", result);
        let ownerPropData = JSON.stringify(result.rows)
        res.status(200).send({ 'status': 'Found', 'data': ownerPropData });
      }
    }
  )
}
)

app.post("/ownerdetails", (req, res) => {
  ownerdata = req.body
  console.log(ownerdata)
  let postgres = `SELECT * FROM "users" WHERE id=${ownerdata.ownerid}`
  client.query(
    postgres, function (err, result) {
      if (result.rows.length === 0) {
        res.status(404).send({ 'status': 'Not Found' })
      }
      else {
        console.log("prop result", result);
        let ownerData = JSON.stringify(result.rows)
        res.status(200).send({ 'status': 'Found', 'data': ownerData });
      }
    }
  )
}
)

app.post("/ownerpropertydetails", (req, res) => {
  propdata = req.body
  console.log(propdata)
  let postgres = `SELECT * FROM "propertydetails" WHERE id=${propdata.propid}`
  client.query(
    postgres, function (err, result) {
      if (result.rows.length === 0) {
        res.status(404).send({ 'status': 'Not Found' })
      }
      else {
        console.log("prop result", result);
        let ownerData = JSON.stringify(result.rows)
        res.status(200).send({ 'status': 'Found', 'data': ownerData });
      }
    }
  )
}
)

app.get("/getbookedprops", (req, res) => {
  let postgres = `SELECT * FROM "propertydetails"`
  client.query(
    postgres, function (err, result) {
      if (result.rows.length === 0) {
        res.status(404).send({ 'status': 'Not Found' })
      }
      else {
        console.log("prop result", result);
        let bookedData = JSON.stringify(result.rows)
        res.status(200).send({ 'status': 'Found', 'data': bookedData });
      }
    }
  )
}
)


app.post("/propertydetails", (req, res) => {
  userpropertyData = req.body
  console.log("dataproperty", userpropertyData)
  client.query(
    `INSERT INTO "propertydetails" ("city","apartment", "bhk","floor","totalfloor","direction","age","area","image","rent","ownerdetails","ownerid","deposit","prefered",
    "parking","furnish","availability")  
                   VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)`, [userpropertyData.city, userpropertyData.apartment, userpropertyData.BHK, userpropertyData.floor, userpropertyData.totalfloor,
  userpropertyData.direction, userpropertyData.age, userpropertyData.area, userpropertyData.imageurl, userpropertyData.rent, userpropertyData.ownerdetails, userpropertyData.ownerId,
  userpropertyData.deposit, userpropertyData.prefered, userpropertyData.parking, userpropertyData.furnish, userpropertyData.available]);
  res.end()
}
)
client.connect();

app.post("/editpropertydetails", (req, res) => {
  editedData = req.body
  let id = editedData.id
  let apartment = editedData.apartment
  let BHK = editedData.BHK
  let floor = editedData.floor
  let totalfloor = editedData.totalfloor
  let age = editedData.age
  let direction = editedData.direction
  let area = editedData.area
  let rent = editedData.rent
  let imageUrl = editedData.image
  let prefered = editedData.prefered
  let furnish = editedData.furnish
  let parking = editedData.parking
  let availability = editedData.available
  let deposit = editedData.deposit

  console.log("dataproperty", editedData)
  console.log(id)
  const postgres = `UPDATE "propertydetails" SET apartment=$1,bhk=$2,floor=$3,totalfloor=$4,age=$5,direction=$6,area=$7,rent=$8,image=$9,prefered=$10,
  furnish=$11,parking=$12,availability=$13,deposit=$14 WHERE id=${id}`
  client.query(
    postgres, [apartment, BHK, floor, totalfloor, age, direction, area, rent, imageUrl, prefered, furnish, parking,
    availability, deposit], function (err, result) {
      if (!err) {
        console.log(result)
      }
      else {
        console.log(err)
      }
    }
  );
  res.end()
}
)


app.delete("/deleteimage/:id", (req, res) => {
  const removeId = req.params.id
  console.log(removeId)
  const postgres = `DELETE FROM "propertydetails" WHERE id=${removeId}`
  console.log(postgres)
  client.query(
    postgres, function (result, err) {
      if (!err) {
        console.log(result)
      }
      else {
        console.log(err)
      }
    }
  )
})


app.post("/booking", (req, res) => {
  bookingStatus = req.body
  console.log("dataproperty", bookingStatus)
  const postgres = `UPDATE "propertydetails" SET status=$1 WHERE id='${bookingStatus.bookingId}'`
  client.query(
    postgres, [bookingStatus.status], function (err, result) {
      if (!err) {
        console.log(result)
      }
      else {
        console.log(err)
      }
    }
  );
  res.end()
}
)
