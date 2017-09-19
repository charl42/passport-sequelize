/* 
 */
var exports = module.exports = {}

exports.signup = function(req,res){

	res.render('signup', { message: req.flash('signupMessage') });

}

exports.signin = function(req,res){

	res.render('signin', { message: req.flash('loginMessage')}); 

}

exports.chatroom = function(req,res){

	res.render('chatroom'); 

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}