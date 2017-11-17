var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next){
  res.render('index', { title: 'Express', user: req.user });
});

// router.get('/login', function(req, res){
//   res.render('login', { user: req.user });
// });




// router.get('/auth/github',
//   passport.authenticate('github', { scope: [ 'user:email' ] }));
 
// router.get('/auth/github/callback', 
//   passport.authenticate('github', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

// router.get('/account', ensureAuthenticated, function(req, res){
//   res.render('account', { user: req.user });
// });

module.exports = router;
