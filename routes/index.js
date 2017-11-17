// import github from 'bugbot-github-issues'

var express = require('express');
var passport = require('passport');
// var ensureAuthenticated = 
var router = express.Router();

var github = require('bugbot-github-issues');

// console.log(github)



router.get('/account', ensureAuthenticated, function(req, res){


	// console.log(req)
	
  // let token = payload.account.github_token
  // let text = "Here's a list of the Github repos I can use:\n" 
  // let color = '#E3E4E6'
  // let mrkdwn_in = ['text']

  // // get the repos
  // github.repos(token, (err, repos) => {
  // 	console.log(repos);
  //   // add the repos
  //   // repos.forEach(r=> {
  //   //   /*
  //   //   text += ` • <https://github.com/${r}|${r}>\n`
  //   //   */
  //   //   text += ` • ${r}\n`
  //   // })
  //   // text += '\nTo change to another repo just run this command:\n'
  //   // text += '`/bugbot repo org/reponame`\n'
  //   // // send the reponse msg
  //   // message({attachments:[
  //   //   {text, color, mrkdwn_in}
  //   // ]})
  // });



  res.render('account', {
   user: req.user 
	});
});



function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/')
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Express', 
  	user: req.user 
  });
});

router.get('/auth/github',
  passport.authenticate('github', { 
  	scope: [ 'user:email' ] 
  }));
 

router.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


module.exports = router;
