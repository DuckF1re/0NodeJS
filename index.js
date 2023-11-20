const express = require('express')//import express fw

const app = express()//spusteni expresu

const port = 300//definovani portu

const path = require('path');//pro manipulaci s cestami, ať už se jedná o absolutní cesty, relativní cesty

const bodyParser = require('body-parser');//imort bodyParseru

app.use(bodyParser.urlencoded({ extended: false }));//dekoduje data poslana pres POST

 

app.use(express.static('public'));

 

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

 

var mysql = require('mysql2');

 

var con = mysql.createConnection({

  host: "192.168.1.161",

  user: "simonmatousek",

  password: "7496416325879321_S",

  database: "simon.matousek",

  port: 3001

});
const con2 = mysql.createConnection({
  host: "192.168.1.161", 
  user: "simonmatousek",      
  password: "7496416325879321_S",  
  database: "simon.matousek",  
  port: 3001             
});



 

con.connect(function(err) {

  if (err) throw err;

  console.log("Connected!");

  
con2.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the second database!");
});

});




app.get('/newuser', (req, res) => {
  res.render('newuser');
  })

  app.post('/createuser', function (request, response, next) {
    console.log(request.body)
      // SQL dotaz pro vložení dat do databáze
      var sql = `INSERT INTO students (fname, lname, age, city) VALUES ('${request.body.fname}', '${request.body.lname}', '${request.body.age}', '${request.body.city}')`;
     
      con.query(sql, (error, results, fields) => {
        if (error) {
          console.error(error);
          return;
        }
        console.log(results);
      })
      response.send(`Uživatele byli vloženi do DB`)
     
    })
   
    

    
 

 

app.get('/', (req, res) => {//home routa

 

    con.connect(function(err) {

        if (err) throw err;

        con.query("SELECT * FROM students",  function (err, result, fields) {

          if (err) throw err;

          console.log(result);

          res.render('index', { result });

        });


      })

      app.get('/filter', (req, res) => {
        const city = req.query.city; // Assuming the parameter is 'city'
        
        const sql = `SELECT * FROM students WHERE city = '${city}'`;
      
        con.query(sql, (error, result, fields) => {
          if (error) {
            console.error(error);
            return;
          }
          console.log(result);
          res.render('filter', { result });
        });
      });

      app.get('/seconddatabase', (req, res) => {
        con2.query("SELECT * FROM teachers", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          res.render('index', { result });
        });
      });

      });

      app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

 

app.listen(port, () => {//spustni serveru

  console.log(`Example app listening on port ${port}`)

})
rjrjrj
