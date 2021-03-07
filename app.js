// importing out modules
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const  purchaseRouter  = require("./routes/purchase_router");
const app = express();
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoURI = "mongodb+srv://test:testing1234@mongodb-workshop.j62wb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectOptions = {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
   useNewUrlParser: true,
   useUnifiedTopology: true
};
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

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'front/index.html'));
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});