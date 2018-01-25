var express = require('express');
var url = require('url');

exports.renderPage = function(req, res) {
  res.render('index');
};

function callback(req, res, success, data) {
  if (!success) {
    console.log("not successful")
    console.log(req.query.partId)
    var search = url.parse(req.url).search;
    res.status(404);
    return res.send();
  }
  console.log("successful")
  res.send(data);
}
