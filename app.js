//importing modules
var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var path = require('path');

var app = express();
const route = require('./routes/routes');

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/contactlist',{ useNewUrlParser: true });
//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to mongoDB @27017');
});
mongoose.connection.on('error',(err)=>{
    if(err) {
        console.log('Error in connection to DB'+ err);
    }    
    });

//port number
const port = 3000;

//adding middleware
app.use(cors());
//BODY PARSER
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);
// testing port
app.get('/', (req,res)=>{
    res.send('foobar');
});

app.listen(port,()=>{
    console.log('Server started at port '+ port);
});

