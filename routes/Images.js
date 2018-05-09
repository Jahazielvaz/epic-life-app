const express = require('express');
const router = express.Router();


//Image model
const Image = require('../models/Image');

//POST image
router.post('/internal', (req, res) => {


  Image.findOne({ url: req.body.image })
    .then(image => {

      if(image){
        return res.status(400).json({imgMSG: 'Image already exists'})
      } else {
        const content = new Image({imagename: req.body.image});
        console.log('record created correctly')
      }
    })//End of .then image
})//End of post route /internal
