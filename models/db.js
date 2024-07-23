// const mysql = require('mysql');

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'ecommerce'
// });

// db.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('MySQL Connected...');
// });

// module.exports = db;


// // import mysql from 'mysql2';

// // const db = mysql.createPool({
// //     host: 'localhost',
// //     user: 'root',
// //     password: '',
// //     database: 'ecommerce'

    
// // });


// // // db.connect((err) => {
// // //     if (err) {
// // //         throw err;
// // //     }
// // //     console.log('MySQL Connected...');
// // // });


// // export default db.promise();

import mysql from 'mysql'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecommerce"
})

con.connect(function(err) {
    if(err) {
        console.log("connection error")
    } else {
        console.log("MySQL ecommerce database Connected")
    }
})

export default con;