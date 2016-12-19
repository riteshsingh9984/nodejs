var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//app.use(bodyParser.json()); // support json encoded bodies

app.use(express.static('public'));

app.get('/app/employee/create', function (req, res) {

  res.sendfile(__dirname + '/views/employee.html');
});

app.post('/app/employee/save', urlencodedParser, function(req, res) {
    /*var user_id = req.body.id;
    var token = req.body.name;
    var geo = req.body.address;*/

    console.log('Employee Postes= ', req.body);
    res.send("dgs");
    //res.send(user_id + ' ' + token + ' ' + geo);
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
});