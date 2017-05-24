'use strict';

var User = require('../model/user').User;

/** Cria usuario */
exports.create = function (req, res) {

    User.create(req.body, function(err, result) {
        if (!err) {
            console.log(result);
            return res.json(result);
        } else {
            return res.send(err);
        }
    });
};


/** função para retornar todos os usuários*/
exports.getAll = function (req, res) {
      User.getAll({}, function(err, result) {
        if (!err) {

            return res.json(result);

        } else {
            return res.send(err);
        }
    });
};

/** função para retornar um usuário pelo id */
exports.get = function (req, res) {

    User.get({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err);
        }
    });
};

/** função para atualizar o usuário */
exports.update = function (req, res) {

    User.updateById({_id: req.params.id}, req.body, function(err, result) {
        if (!err) {

            return res.json(result);
        } else {
            return res.send(err);
        }
    });
}

/** função para deletar usuário*/
exports.delete = function (req, res) {

    User.removeById({_id: req.params.id}, function(err, result) {
        if (!err) {
           User.getAll({}, function(err, result) {
                if (!err) {
                    return res.json(result);
                } else {
                    return res.send(err);
                }
            });
        } else {
            console.log(err);
            return res.send(err); 
        }
    });
}
