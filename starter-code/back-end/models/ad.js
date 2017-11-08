module.exports = function(sequelize, Sequelize) {
	let model = sequelize.define("ad", {
		headline: Sequelize.STRING,
		url: Sequelize.STRING
	});
	return model;
};