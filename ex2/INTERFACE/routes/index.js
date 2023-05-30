var express = require('express');
var router = express.Router();
var ap = require('../config/env.js')
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(ap.APIaccesspoint+"/plantas")
  .then(resp =>{
      size = resp.data.length
      res.render('index', { plantas:resp.data , n:size});
  }).catch(err=>{
      res.render('error',  {error: err});
  })
});

router.get('/plantas/:id', function(req, res, next) {
  axios.get(ap.APIaccesspoint+"/plantas/"+req.params.id)
  .then(resp =>{
      res.render('planta', { planta:resp.data });
  }).catch(err=>{
      res.render('error',  {error: err});
  })
});


router.get('/especies/:id', function(req, res, next) {
  axios.get(ap.APIaccesspoint+"/especies/"+req.params.id)
  .then(resp =>{
      res.render('especie', { especie:resp.data });
  }).catch(err=>{
      res.render('error',  {error: err});
  })
});


module.exports = router;