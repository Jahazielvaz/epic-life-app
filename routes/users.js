var express = require('express');
var router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

//Load User Model
const User = require('../models/User');

// const validateRegisterInput = require('../validator/register');



// POST user information
router.post('/register', (req, res) => {
  // const { errors, isValid } = validateRegisterInput(req.body);

  //Check validation
  // if(!isValid){
  //   return
  //     res.status(400).json(errors);
  // }

  User.findOne({ username: req.body.username })
    .then(user => {

      if(user){
        return res.status(400).json({userMSG: 'User already exists'})
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: 200, //Size
          r: 'pg', //Rating
          d: 'mm' //Default
        })//End of avatar

        const newUser = new User({
          puppy: req.body.puppy,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          username: req.body.username,
          avatar,
          password: req.body.password
        })

        console.log('Record Created Successfully');

        bcrypt.genSalt(10, (err, salt) => { //The first parameter is the number of characters, second is the callback. I believe genSalt, and salt are preset. Need to find out what they do.
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(console.log(err));
          })//End of bcrypt hash
        })//End of gen salt

        // return res.render('')
      }//End of else

    }) //End of .then
})  //End of register route






/* Login Users */
router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne( {username} )
    .then(user => {

      if(!user){
        return res.status(404).json({wronguser: 'User Not Found!'})
      }

      //Check password
      bcrypt.compare(password, user.password)
        .then(matches => {
          if(matches){
            //User Matched
            const payload = {id: user.id, name: user.name, avatar: user.avatar}

            //Signin Token
            jwt.sign(payload, keys.secretKey, {expiresIn: 3600 }, (err, token) => {
              res.json({
                success: true,
                token: 'Bearer' + token
              })
            })
          } else {
            return res.status(400).json({password: 'Password Incorrect'})
          }
        })
    })
})

// router.get('/test', (req, res) => {
//   res.json({msg: 'This is my test endpoint'})
// })


module.exports = router;
