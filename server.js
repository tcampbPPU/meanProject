const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const credentials = require('./credentials.js');
const connect = require('./connect.js');

var index = require('./routes/index');

var app = express();

// Sets port for application to run on
app.set('port', process.env.PORT || credentials.port || 3000);

// view engine
app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Set Static folder for Angular stuff
app.use(express.static(path.join(__dirname, 'views')));

// Body Parser Middle Wear
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add routes for stuff here ...
app.use('/', index);


app.listen(app.get('port'), function() {
  console.log(`Server listening on ${app.get("port")} press Ctrl-C to terminate`);
});
