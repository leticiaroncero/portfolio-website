var express = require("express");
var db = require("../models");

var router = express.Router();

router.get("/", function (req, res) {
    res.sendFile("index.html", { 'root': "./views" });
});

router.post("/", function (req, res) {
    db.Contact.create({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })
        .then(function () {
            res.redirect("/");
        })
        .catch(function (err) {
            res.status(400).json(err);
        });
})

module.exports = router;