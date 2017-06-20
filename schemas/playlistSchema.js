var mongoose = require('mongoose');
	schema   = mongoose.Schema;

var songSchema	   = new schema({
	songId:String,
	songTitle:String,
	songAuthor:String,
	yearOfCreation:String,
	image:String
});

var playlistSchema = new schema({
		userId:Number,
		playlist:[songSchema]
},{collection:"playlist"});

var Playlist = mongoose.model('playlist',playlistSchema);
module.exports = Playlist;