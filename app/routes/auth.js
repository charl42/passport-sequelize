/* 
 */
var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){
 app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });
app.get('/signup', authController.signup);
app.get('/signin', authController.signin);

app.post('/signup', passport.authenticate('local-signup',  { successRedirect: '/dashboard',
                                                    failureRedirect: '/signup'
                                                ,}
                                                    ));
app.get('/chatroom',isLoggedIn, authController.chatroom);
app.get('/logout',authController.logout);
app.post('/signin', passport.authenticate('local-signin',  { successRedirect: '/dashboard',
                                                    failureRedirect: '/signin'}
                                                    ));

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}


}
