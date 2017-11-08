var DB = require("../models").models;

var lucySongs = [
     {
          title: "O sole mio",
          duration: "3:21",
          date_of_release: "1990",
          album_title: "Three Tenors in Concert",
          artistId: ""
     },
     {
          title: "Nessun dorma",
          duration: "3:21",
          date_of_release: "1990",
          album_title: "Three Tenors in Concert",
          artistId: ""
     }
];

 var artistCreate = function(manager) {
     console.log(manager);
 	return DB.Artist.create({
     name: 'Luciano Pavarotti',
     photoUrl: 'http://img.informador.com.mx/biblioteca/imagen/677x508/811/810055.jpg',
     nationality: 'Italiano',
     instrument: 'Voice',
     home_address: '1 Strada Roma',
     managerId: manager.dataValues.id
   })
     .then((artist) => {
          lucySongs.forEach(function(song) {
                    song.artistId = artist.id;
          });
          DB.Song.bulkCreate(lucySongs);
     });
 };

 var managerCreate = function() {
     return DB.Manager.create({
     name: 'Ricky Bobby',
     email: 'rbobby@gmail.com',
     office_number: '516-877-0304',
     cell_phone_number: '718-989-1231'
     });
 };

 
 var songCreate = function() {
 	return DB.Song.create({
 	    title: 'The Best Song Ever',
 	    duration: '3:31',
 	    date_of_release: '7/13/2015',
 	    album_title: 'Best Album Ever'
 	});
 };

 let adCreate = function(manager) {
     return DB.Ad.create({
          headline: 'New Ad I Hope This Works!',
          url: "www.yesomgawesome.com",
          managerId: manager.dataValues.id
     });
 };

 managerCreate()
 .then(adCreate)
.then(artistCreate)
.then(songCreate)
.then(() => {
     process.exit();
 
 // artistCreate()
 // .then(managerCreate)
 // .then(songCreate)
 // .then(function() {
 // 	process.exit();
 }); 