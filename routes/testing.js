var express = require('express');
var router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');


const Test = require('../models/Testing');

// api/test
router.post('/test', (req, res) => {

  Test.findOne({ user: req.body.name })
    .then(user => {

      if(user){
        return res.status(400).json({userMSG: 'Test exist'})
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: 200, //Size
          r: 'pg', //Rating
          d: 'mm' //Default
        })//End of avatar

        const newTest = new Test({
          name: req.body.name,
          email: req.body.email,
          username: req.body.username,
          avatar,
          password: req.body.password
        })//End of newTest

        console.log('New Test Created Successfully')


      }//End of else statement
    })



})// End of routes


module.exports = router;
