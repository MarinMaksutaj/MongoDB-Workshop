// importing out modules
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const  purchaseRouter  = require("./routes/purchase_router");
const app = express();

//support parsing of application/x-www-form-urlencoded post data
// parses the data that comes from front end to back end 
// important line
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// uri to access mongoDB database on Atlas servers
const mongoURI = "Your MongoDB URI goes here";

const connectOptions = {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
   useNewUrlParser: true,
   useUnifiedTopology: true
};

// only use for Mongoose 4 or below
mongoose.Promise = global.Promise;


mongoose.connect(mongoURI, connectOptions, (err, db) => {
  if (err) {
  	console.log(`Error`, err);
  } else {
  	console.log(`Connected to MongoDB`);
  }  
});

app.use(purchaseRouter);

app.use(express.static(__dirname + '/front'));


// The app. get() method specifies a callback function that will be invoked whenever there is an HTTP GET
// request with a path ( '/' ) relative to the site root
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'front/index.html'));
});

// listen the connections on the specified host and port
app.listen(3000, () => {
    console.log("server running on port 3000");
});