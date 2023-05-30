var plantaModel = require('../models/plantas')

module.exports.list = () => {
    return plantaModel.find()
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.getPlanta = id => {
    return plantaModel.findOne({'_id':id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.getEspecie = especie => {
    return plantaModel.aggregate([{ $match: { "Especie.nome": especie } }])
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.getEspecies = () => {
    return plantaModel.aggregate([{$group:{_id:"$Especie"}}])
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}


module.exports.getEspecieID = id => {
    return plantaModel.aggregate([{ $match: { "Especie._id": id } }])
        .then(dados => {
            return dados[0]
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.getImplant = i => {
    return plantaModel.aggregate([{ $match: { "Implantacao": i} }])
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.getFreguesias = () => {
    return plantaModel.aggregate([{$group:{_id:"$Freguesia"}}]).sort({'Freguesia':1})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.addPlanta = p => {
    return Lista.create(p)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.deletePlanta = id => {
    return Lista.deleteOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}