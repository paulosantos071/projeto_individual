var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var publicacao = require('../models').publicacao;
var usuario = require('../models').usuario;
var env = process.env.NODE_ENV || 'development';


// estatísticas (max, min, média, mediana, quartis etc)
router.get('/dados', function (req, res, next) {
	
	console.log(`Recuperando as estatísticas atuais`);

	const instrucaoSql = `SELECT
    (SELECT COUNT(*) FROM receita WHERE tipoReceita = "DOCE") as tipoDOCE,
    (SELECT COUNT(*) FROM receita WHERE tipoReceita = "SALGADO") as tipoSALGADO,
    (SELECT COUNT(*) FROM receita WHERE tipoReceita = "AGRIDOCE") as tipoAGRIDCOCE,
	(SELECT COUNT(*) FROM usuario) as quantUsuario`;
					

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});


module.exports = router;
