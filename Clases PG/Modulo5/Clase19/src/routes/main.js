const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', function(req,res){
	let htmlPath = path.resolve(__dirname, '../views/home.html');
	res.sendFile(htmlPath);
})

module.exports = router;