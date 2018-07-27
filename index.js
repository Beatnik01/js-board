var express = reqiure("express");
var mongoose = reqiure("mongoose");
var bodyParser = reqiure("body-parser");
var methodOverride = reqiure("method-override");
var app = express();

mongoose.connect(
  "mongodb://ocidos0417:ocidos0417@@ds155461.mlab.com:55461/js_board",
  { useMongoClient: true }
);

var db = mongoose.connection;

db.once("open", () => {
  console.log("DB connected");
});

db.on("error", () => {
  console.log("DB ERROR : ", err);
});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/", require("./routes/home"));

app.listen(3000, () => {
  console.log("Server on!");
});
