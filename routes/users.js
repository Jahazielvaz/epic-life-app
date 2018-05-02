var express = require('express');
var router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

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
        const avatar = gravatar.url(req.body.email, {
          s: 200, //Size
          r: 'pg', //Rating
          d: 'mm' //Default
        })

        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) = { //The first parameter is the number of characters, second is the callback. I believe genSalt, and salt are preset. Need to find out what they do.
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user
              .catch(console.log(err));
          })
        })
      }
    })
})



module.exports = router;
