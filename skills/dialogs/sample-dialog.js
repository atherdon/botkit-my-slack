var Botkit = require('../../lib/Botkit.js');

if (!process.env.token) {
  console.log('Error: Specify token in environment');
  process.exit(1);
}

var controller = Botkit.slackbot({
 debug: false
});

// part was not moved
// like yes, no, erro branches
// not working at this moment, due to passing additional data into array
let threads = [

];

// part added for make some adjustments

//end

functionA = (response, convo) => {
  convo.ask("What flavor of pizza do you want?", function(response, convo) {
    convo.say("Awesome.");
    functionB(response, convo);
    convo.next();
  });
};

functionD = (response, convo) => {
  convo.ask("What want what?", function(response, convo) {
    convo.say("Awesome.");
    functionC(response, convo);
    convo.next();
  });
};

functionC = (response, convo) => {
  convo.ask("So when we must do this or that?", function(response, convo) {
    convo.say("Good Bye");

    // functionFinish(response, convo);
    convo.next();
  });
};


functionEnd = (convo) => {

  convo.on('end', function(convo) {

      if (convo.successful()) {
          // this still works to send individual replies...
          bot.reply(message, 'Let us eat some!');

          // and now deliver cheese via tcp/ip...
      }

  });

};


modules.export = {
  fucntiona,
  functionab,
  functionac
}
