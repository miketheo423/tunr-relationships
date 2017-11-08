//Connect
var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://michaeltheodorou@localhost:5432/tunr_relationships');

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var Artist = sequelize.import("./artist");
var Manager = sequelize.import("./manager");
var Song = sequelize.import("./song");
let Ad = sequelize.import("./ad");

Song.belongsTo(Artist);
Artist.hasMany(Song);

Artist.belongsTo(Manager);
Manager.hasMany(Artist);

Manager.hasOne(Ad);
Ad.belongsTo(Manager);

module.exports.models = {
	Artist: Artist,
	Manager: Manager,
	Song: Song,
	Ad: Ad
};
