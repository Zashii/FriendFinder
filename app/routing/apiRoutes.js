var friends = require("../data/friends.js");
var express = require("express");
var path = require("path");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {

        return res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {
        var newcharacter = req.body;
    
        friends.push(newcharacter);
    
        res.json(friends.newcharacter);
    });
};
  