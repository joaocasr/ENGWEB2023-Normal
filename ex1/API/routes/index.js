var express = require('express');
var router = express.Router();
var Planta = require('../controllers/plantas')


/*
    - GET /plantas: devolve uma lista com todos os registos;
    - GET /plantas/:id: devolve o registo com identificador id;
    - GET /plantas?especie=EEEE: devolve a lista dos registos correspondentes à espécie EEEE;
    - GET /plantas?implant=AAA: devolve a lista dos registos com implantação AAA;
    - GET /plantas/freguesias: devolve a lista de freguesias ordenada alfabeticamente e sem repetições;
    - GET /plantas/especies: devolve a lista das espécies vegetais ordenada alfabeticamente e sem repetições;
    POST /plantas: acrescenta um registo novo à BD;
    DELETE /plantas/:id: elimina da BD o registo com o identificador id.

    GET /plantas/especies/:id
*/
router.get('/plantas', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  if(req.query.especie){
    Planta.getEspecie(req.query.especie).then(ok=>{
      res.jsonp(ok);
    }).catch(error=>{
      res.status(404).jsonp(error);
    })
  }else if(req.query.implant){
    Planta.getImplant(req.query.implant).then(ok=>{
      res.jsonp(ok);
    }).catch(error=>{
      res.status(404).jsonp(error);
    })
  }else{
    Planta.list().then(ok=>{
      res.jsonp(ok);
    }).catch(error=>{
      res.status(404).jsonp(error);
    })
  }
});

router.get('/plantas/freguesias', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Planta.getFreguesias().then(ok=>{
      res.jsonp(ok);
    }).catch(error=>{
      res.status(404).jsonp(error);
    })
  
});

router.get('/plantas/especies', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Planta.getEspecies().then(ok=>{
      res.jsonp(ok);
    }).catch(error=>{
      res.status(404).jsonp(error);
    })
  
});


router.get('/especies/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Planta.getEspecieID(req.params.id).then(ok=>{
      res.jsonp(ok);
    }).catch(error=>{
      res.status(404).jsonp(error);
    })
  
});

router.get('/plantas/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Planta.getPlanta(req.params.id).then(ok=>{
      res.jsonp(ok);
    }).catch(error=>{
      res.status(404).jsonp(error);
    })
  
});

router.delete('/plantas/:id', function(req, res) {
  Lista.deletePlanta(req.params.id)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na delecao de uma planta"})
    })
})


router.post('/plantas', function(req, res) {
  Lista.addPlanta(req.body)
    .then(lista => {
      res.jsonp(lista)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na inserção da lista"})
    })
})

module.exports = router;