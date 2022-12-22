// const {Client} = require('pg');
// const client = new Client({
//     host:'localhost',
//     user:'developer',
//     port:'5432',
//     password:'hari2811@',
//     database:'postgres'

// })


// const insertUser = async (
//    id=2, name='harish',password='12345',role=true,email='harish@gmail.com',phonenumber='12345'
// ) => {
//     try {
//         // await client.connect();           // gets connection
//         await client.query(
//             `INSERT INTO "users" ("id","name", "password","role","email","phone")  
//              VALUES ($1, $2,$3,$4,$5,$6)`, [id,name, password,role,email,phonenumber]); // sends queries
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
// client.query(`Select * from users`,(err,res)=>{
//     if(!err){
//         console.log(res.rows)
//     }
//     else{
//         console.log(err.message)
//     }
//     client.end
//     console.log(client)
// })