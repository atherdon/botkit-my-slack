// import github from 'bugbot-github-issues'

var express = require('express');
var passport = require('passport');
var github = require('bugbot-github-issues');
var _ = require('underscore');
var async = require('async');

// var ensureAuthenticated = 

var router = express.Router();



// console.log(github)
router.get('/issues', ensureAuthenticated, function(req, res, next) {


console.log(req.user.pidor)
	// console.log(github.default)
let token = req.user.pidor;
let single_repo
  github.default.repos(token, (err, repos) => {
  	// console.log(repos);
  	// console.log(err);
  //   // add the repos
  	
  	// console.log();
  	repos = _.uniq(repos)
  	// console.log(repos);

    repos.forEach(r => {
      
    	if( r == 'atherdon/botkit-my-slack' ){
    		single_repo = r;
    		// console.log(single_repo);
    	}
    	// console.log(r);
      // text += ` • <https://github.com/${r} | ${r}>\n`
      
      // text += ` • ${r}\n`
    })



	github.default.issues(token, single_repo, (err, issues) => {

		console.log(issues)

	});


    // text += '\nTo change to another repo just run this command:\n'
    // text += '`/bugbot repo org/reponame`\n'

    // console.log(text);
  //   // // send the reponse msg
  //   // message({attachments:[
  //   //   {text, color, mrkdwn_in}
  //   // ]})
  });

	// console.log(single_repo);
	// console.log('HEY YOU GUYSTH', token, single_repo)
  // 

  res.render('index', { 
  	title: 'Express', 
  	user: req.user 
  });
});


router.get('/account', ensureAuthenticated, function(req, res){


	console.log(req.user.pidor)
	// console.log(github.default)
  let token = req.user.pidor;
  let text = "Here's a list of the Github repos I can use:\n" 
  let color = '#E3E4E6'
  let mrkdwn_in = ['text']



  // // get the repos

  // console.log();

  // var a = github.repos(token, function(e,d){

  // });

  github.default.repos(token, (err, repos) => {
  	console.log(repos);
  	// console.log(err);
  //   // add the repos

  	// console.log();
  	repos = _.uniq(repos)
    repos.forEach(r => {
      
      text += ` • <https://github.com/${r} | ${r}>\n`
      
      text += ` • ${r}\n`
    })
    text += '\nTo change to another repo just run this command:\n'
    text += '`/bugbot repo org/reponame`\n'

    console.log(text);
  //   // // send the reponse msg
  //   // message({attachments:[
  //   //   {text, color, mrkdwn_in}
  //   // ]})
  });



  res.render('account', {
   user: req.user 
	});
});



function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/')
}

/* GET home page. */

router.get('/users', ensureAuthenticated, function(req, res, next) {
	
	let token = req.user.pidor;
	github.default.user(token, (err, usr)=> {
	    // if (err) {
	    //   t.fail(err, err)
	    // }
	    // else {
	    //   t.ok(usr, 'got the user')
	      console.log(usr)
	    // }
	    // t.end()
	})



  res.render('index', { 
  	title: 'Express', 
  	user: req.user 
  });
});

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
