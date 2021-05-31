'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Publicacao = sequelize.define('Publicacao',{	
		id: {
			field: 'id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
        tituloReceita: {
            field: 'titulo',
            type: DataTypes.STRING,
            allowNull: false
        },
		receita: {
            field: 'receita',
            type: DataTypes.STRING,
            allowNull: false
        },
        fkUsuario: {
            field: 'fkUsuario',
            type: DataTypes.INTEGER,
            allowNull: false
        },
		createdAt:{
			field: 'createdAt',
			defaultValue: data(),
			type: DataTypes.DATE,
			allowNull: false
		}
	}, 
	{
		tableName: 'receita', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Publicacao;
};


function data(){
	var dataAtual = new Date();
	dataAtual.setHours(dataAtual.getHours()-3)
	return dataAtual;
}
