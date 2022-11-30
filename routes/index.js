var express = require('express');
var router = express.Router();

var MongoClient=require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit',function(req,res){
  console.log(req.body)

  MongoClient.connect('mongodb://0.0.0.0:27017/',function(err,client){
    if(err){
      console.log('Error!')
    }  
    else{
      console.log('database connected.')
      client.db('Signups').collection('accounts').insertOne(req.body)
    }
      

  })

  res.send('Account created Successfully!!')

})

module.exports = router;
