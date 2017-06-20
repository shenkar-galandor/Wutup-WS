var mongoose = require ('mongoose');
mongoose.connect('mongodb://db_usr:db_pass@ds131432.mlab.com:31432/wutupdb');
const conn = mongoose.connection;

