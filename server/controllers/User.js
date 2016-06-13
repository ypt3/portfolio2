var mongoose = require('mongoose');
var User = mongoose.model('User');
//leaving here for future blog implementation
module.exports = (function(){
	// return {
		//this will eventually be just for the logged user
	// 	show: function(req, res){
	// 		 User.find({}, (function(err, Users){
	// 		 	if(err){
	// 		 		console.log(err)
	// 		 	}
	// 		 	else{
	// 		 		res.send(JSON.stringify(Users));
	// 		 	}
	// 		 })
	// 		)
	// 	},
	//
	// 	create: function(req, res){
	// 		 var user = new User({name: req.body.name});
	// 		 user.save(function(err, result){
	// 		 	if(err){
	// 		 		console.log(er)
	// 		 	}
	// 		 	else{
	// 		 		res.send(JSON.stringify(result));
	// 		 	}
	// 		 })
	// 	},
	//
	// 	findOne: function(req, res){
	// 		User.findOne({_id: req.body.id} , function (err, foundUser){
	// 		 	if(err){
	// 		 		console.log(err)
	// 		 	}
	// 		 	else{
	// 		 		res.json(foundUser);
	// 		 	}
	// 		 })
	// 	},
	//
	// 	remove:  function(req, res){
	// 		User.remove({_id: req.body.id}, function(err, foundUser){
	// 			if (err){
	// 				console.log(err)
	// 			} else {
	// 				res.end()
	// 			}
	// 		})
	// 	}
	//
	// }

}) ();
