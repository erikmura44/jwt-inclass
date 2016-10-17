var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken'); //only required in users

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', function(req, res, next){
   const token = jwt.sign({}, process.env.JWT_TOKEN,{
      expiresIn: '15 minutes'
   })

   //const user = {
   //    username: req.body.username,
   //    password: hash(req.body.password),
   //    token
   // }

   const user = {
      username: req.body.username,
      password: req.body.password,
      token
   }

   // this is where we do the queries to the db

   // User.create(user)
   // .then(function(){
   //   res.json({token})
   // })

   res.json({token})

})

// function hash (password){
//    //create hashed password
// }

module.exports = router;
