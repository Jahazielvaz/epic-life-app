var express = require('express');
var router = express.Router();

//Load User Model
const User = require('../models/User')

/* GET users listing. */
router.get('/login', (req, res) => {
  res.json({msg: 'Sample text for now'});
})

// POST user information
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if(user){
        return res.status(400).json({email: 'Email already exists'})
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar: avatar,
          password: req.body.password
        })
      }
    })
})



module.exports = router;
