var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var routes = require("./controllers/routes");
app.use(routes);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});