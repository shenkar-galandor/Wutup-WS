const express       =     require('express'),
      bodyParser    =     require('body-parser'),
      app           =     express(),
      db_functions  =     require ('./db_modules/db_functions'),
      path          =     require('path'),
      searchM       =     require('./searchModule'),
      port          =     process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(
(req,res,next) => {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
// res.set("Content-Type", "application/json");
next();
});

app.get('/api',function(req,res){
  res.sendFile(path.join(__dirname+'/api/index.html'));
});

app.get('/search',(req,res,next)=>{
  searchM.getAllPlaylist().then((result)=>{
    res.json(result);
  });
});

app.get('/getAllPlaylist',db_functions.getAllPlaylist);

app.post('/deleteSong',db_functions.deleteSongFromPlaylist);

app.post('/addSong',db_functions.addSongToPlaylist);



app.listen(port,
    ()=>{
    console.log(`listening on port ${port}`);
});