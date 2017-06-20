var mongoose = require ('mongoose'),
	MLAB_KEY = require ('./options').MLAB_KEY;

mongoose.connect(MLAB_KEY);
const conn = mongoose.connection;

mongoose.connection.on('connected',()=>{
	console.log('Mongoose Connect Successfully');
});

mongoose.connection.on('error',()=>{
	console.log('Error During Connection!');
});

mongoose.connection.on('disconnected',()=>{
	console.log('Dissconnect from DB');
});

exports.conn = conn;