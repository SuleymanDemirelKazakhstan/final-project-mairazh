const express = require('express');

const app = express();
const router = require('./router');

app.use(express.static('public'));
app.use(express.static('files'));


const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var exphandle  = require('express-handlebars');
var handle = exphandle.create();

app.set('view engine', 'handlebars');
app.engine('handlebars', handle.engine);


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



function autho(req, res, next){
	console.log("hello middleware");
	req.siteName = "SDU Portal";
	if(req.session.number){

		req.authorized = true;
	}
	else{
		req.authorized = false;
	}
	next();
}
	

const cookieParser = require('cookie-parser');
let session = require('express-session');
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

const bodyParser = require('body-parser');
const {response} = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(autho);
app.use(router.router);
app.listen(8008, ()=>{
	console.log("Listening...");
});