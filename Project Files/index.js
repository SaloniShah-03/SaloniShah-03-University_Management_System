const mysql = require('mysql')
const express = require('express');
var bodyParser = require('body-parser');
const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cc_project",
   
})
connection.connect(function(error)
{
    if(error){
        console.log('error')
    }
    else{
        console.log("Connected")
    }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
res.setHeader('Content-Type', 'application/json');
res.setHeader('Access-Control-Request-Headers','Content-Type');
res.setHeader('Access-Control-Request-Headers','Accept');

res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    next();
  })
//GPA
  app.post('/d1',(req,res)=>{      
    req.setTimeout(0)
    
     let user = req.body;
       console.log(user);  
        id=user.id;
        console.log(id);
     connection.query("SELECT * FROM mytable WHERE CGPA_N >='"+ id +" ' " , function (error, rows, fields) {
         if (error) throw error;
          res.send(rows);
          console.log(rows)
          });
    
      });

//Work_Ex
      app.post('/d2',(req,res)=>{      
        req.setTimeout(0)
        
         let user = req.body;
           console.log(user);  
            id=user.id;
            console.log(id);
         connection.query("SELECT * FROM mytable WHERE WorkExperience_N >='"+ id+" ' " , function (error, rows, fields) {
             if (error) throw error;
              res.send(rows);
              console.log(rows)
              });
        
          });

//Project
app.post('/d3',(req,res)=>{      
    req.setTimeout(0)
    
     let user = req.body;
       console.log(user);  
        id=user.id;
        console.log(id);
     connection.query("SELECT * FROM mytable WHERE Projects_SS ='"+ id+"' " , function (error, rows, fields) {
         if (error) throw error;
          res.send(rows);
          console.log(rows)
          });
    
      });

app.get('/d',(req,res)=>{
   
    connection.query('SELECT * FROM mytable ', function (error, rows, fields) {
        if (error) throw error;
       res.send(rows);
      });

    })

    app.listen(4000,function(req,res)
{
    console.log("Running")
})