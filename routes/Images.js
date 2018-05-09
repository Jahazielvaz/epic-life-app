const express = require('express');
const router = express.Router();


//Image model
const Name = require('../models/Image');

//POST characters
// /api/images/charactername
router.post('/charactername', (req, res) => {

  Name.findOne({ charactername: req.body.charactername })
    .then(character => {
      if(character){
        return res.status(400).json({charMSG: 'Name already exists!'})
      } else {
        const newChar = new Name({
          charactername: req.body.charactername
        })
      }
    })
        // res.json({name: req.body.characterName})
})  //End of post route /internal


module.exports = router;
