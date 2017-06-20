var conn 			= require('./db_connector').conn,
	mongoose		= require('mongoose'),
	playlist 		= require('../schemas/playlistSchema');

mongoose.Promise = global.Promise;

// Get all song playlist from database
exports.getAllPlaylist = (req,res) =>{
	playlist.find({},
		(err,docs)=>{
			if (err) console.log(`query error: ${err}`);
			res.json(docs);
			return;
		});
};

// Delete a song by song id from database
exports.deleteSongFromPlaylist =  (req,res) =>{
	let newId = req.body.song_id;
	playlist.update({},{$pull:{playlist:{"songId": `${newId}` }}},
		(err,docs)=>{
			if (err) console.log(`query error ${err}`);
			res.json(docs);
			return;
		});

}

// Add a song to databse of specific user
exports.addSongToPlaylist = (req,res) => {
	let songId = req.body.song_id;
	let songTitle = req.body.song_title;
	let songAuthor = req.body.song_author;
	let yearOfCreation = req.body.year
	let image = req.body.image;
	playlist.update({userId:1},{$push:{playlist:{
			$each:[
				{"image":`${image}`,
				"yearOfCreation":`${yearOfCreation}`,
				"songAuthor":`${songAuthor}`,
				"songTitle":`${songTitle}`,
				"songId":`${songId}`},
				]
			}
		}
	},(err,docs)=>{
		if (err) console.log(`query error ${err}`);
		res.json(docs);
		return;
	});
}