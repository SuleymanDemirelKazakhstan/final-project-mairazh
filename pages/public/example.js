const express = require('express')
const app = express()

app.use(express.static('public'));
app.use(express.static('files'));

const router = require('./router');

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bodyParser = require('body-parser');
const {response} = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const cookieParser = require('cookie-parser');
let session = require('express-session');
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));


var exphandle  = require('express-handlebars');
var handle = exphandle.create();

app.set('view engine', 'handlebars');
app.engine('handlebars', handle.engine);

function specifyName(req, res, next){
	console.log("hello middleware");
	req.siteName = "SDU Portal";
	
	next();
}


mongoose.connect("mongodb://localhost:27017/userdb", { useNewUrlParser: true });

const userScheme = new Schema({
	number: {
		type: Number,
		required: true,
		min:10
	}
});

const User = mongoose.model('User', userScheme);


app.get('/login', (req, res) =>{

	res.render('register.handlebars');

});


app.post('/user_new', (req, res)=>{

const num = req.body.login;

console.log(req.body);

const user = new User({
	number: num
});


user.save((err)=>{

	if(err) res.send("Еrror occur...");
		else

	req.session.userData = num;
	res.redirect('/firstPage.html');

});

});

app.use(router.router);
app.listen(9009, ()=>{
	console.log("Listening...");
});