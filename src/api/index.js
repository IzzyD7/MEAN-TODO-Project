'use strict';

const express = require('express');

const router = express.Router();


router.get('/todos', (req,res)=>{
  res.json({todos:[]});
});

//TODO:Add POST route to create entries

//TODO: Add PUT to update entries

//TODO: add DELETE to delete entries

module.exports = router;
