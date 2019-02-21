"use strict";

const mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'f1'
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connected!');
  }
});

app.post('/api/auto', function(req, res) {
  let user = req.body;
  connection.query('INSERT INTO auto SET ?', user, (err, result) => {
    if (!err) {
      res.setHeader('Content-Type', 'application/json')
      connection.query('SELECT * FROM auto where id=?', result.insertId, (err, rows) => {
        if (!err) {
          let user = rows[0];
          if (user) {
            res.setHeader('Content-Type', 'application/json')
            res.status(201).end(JSON.stringify(user));
          } else {
            res.setHeader('Content-Type', 'application/json')
            res.status(404).end();
          }
        } else {
          throw err;
        }
      });
    } else {
      throw err;
    }
  });
});

app.get('/api/auto', function(req, res) {

  res.setHeader('Content-Type', 'application/json');

  connection.query('SELECT * FROM auto', (err, rooms) => {
    if (!err) {
      res.end(JSON.stringify(rooms));
    } else {
      throw err;
    }
  });
});

app.get('/api/auto/:id', function(req, res) {

  let id = +req.params.id

  connection.query('SELECT * FROM auto where id=?', id, (err, rows) => {
    if (!err) {
      console.log('Data received from Db:\n');

      let user = rows[0];

      if (user) {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(user));
      } else {
        res.setHeader('Content-Type', 'application/json')
        res.status(404).end();
      }
    } else {
      throw err;
    }
  });
});

app.put('/api/auto/:id', function(req, res) {

        let id = +req.params.id
        let inputUser = req.body;

        connection.query(
          'UPDATE auto SET merk=?, motor=?, teamID=? Where ID = ?',
          [inputUser.merk, inputUser.motor, inputUser.teamID	, id],
          (err, result) => {
            if (!err) {
              console.log(`Changed ${result.changedRows} row(s)`);

              connection.query('SELECT * FROM auto where id=?', [id], (err, rows) => {
                if (!err) {
                  console.log('Data received from Db:\n');

                  let user = rows[0];

                  console.log(user);
                  if (user) {
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify(user));
                  } else {
                    res.setHeader('Content-Type', 'application/json')
                    console.log("Not found!!!");
                    res.status(404).end(); // rloman send 404???
                  }
                } else {
                  throw err;
                }
              });
            }
            else {
              throw err;
            }
      });
});

app.delete('/api/auto/:id', function(req, res) {
  let id = +req.params.id;

  connection.query(
    'DELETE FROM auto WHERE id = ?', [id], (err, result) => {
      if (!err) {
        console.log(`Deleted ${result.affectedRows} row(s)`);
        res.status(204).end();
      }
      else {
        throw err;
      }
    }
  );
});

// and finally ... run it :-)
// get the server from the app which runs on port 8081
var server = app.listen(8081, function() {

  console.log("Example app listening at http://%s:%s", server.address().address, server.address().port)
});
