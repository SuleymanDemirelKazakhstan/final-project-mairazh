const express = require('express');
const router = express.Router();


const app = express();

var exphandle  = require('express-handlebars');
var handle = exphandle.create();

app.set('view engine', 'handlebars');
app.engine('handlebars', handle.engine);


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var data = db.db("Cakes");

  router.get('/admin', (request, response)=>{
  	data.collection("collection").find({}).toArray((error, result)=>{
      if(err) throw err;
    	console.log(result);

    	if(request.session.number){
    		response.render('admin', {admin: result, style: 'admin.css'});
    	} else{
    		response.send("You are not authorized");
    	}
  	});
  });

  router.get('/:path', (request, response)=>{

  	data.collection("collection").deleteOne({path: request.params.path})
  		if(err) throw err;
  });

});

module.exports = router;