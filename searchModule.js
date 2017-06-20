const search    =     require('youtube-search');

var opts = {
    maxResults: 6,
    key: 'AIzaSyDiAOv9ztDziXmkEeJtPZGxW_LOwF_ufoY'
};

exports.getAllPlaylist = function (){
return new Promise((resolve,reject)=>{
		search("hip hop mixtapes", opts, (err,res)=>{
			if (err) reject (err);
			else {resolve(res);}
		});
	});
};


// search("hip hop mixtapes", opts, function(err, results) {
//     if (err) return console.log(err);
//     return (results);
// 		});


