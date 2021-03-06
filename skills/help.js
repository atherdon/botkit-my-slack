//
// let help_bugbot = 'You can say these things to me(just type help in the channel):\n'+
//     '\tList of commands\n'+
//     '\t⦿ \n'+
//     '\t⦿ \n'+
//     '\t⦿ \n'+
//     '\t⦿ \n'+
//     '\t⦿ \n'+
//     '\t⦿ \n'+
//     '\t⦿ \n'+
//     '\t⦿ \n'+
//     '\t⦿ \n'
//     ;
const debug = require('debug');

const help = require('../data/help-messages');

console.log(help);

//-----------------------------------------
let text = `I'm here to help!\n`;

    let attachments = [
      {
        title: 'Adding and accessing your Github Issues',
        color: '#2FA44F',
        text: "`/bugbot add Your Issue Title` submit a new issue \n`" +
              "/bugbot issues` show your open issues",
        mrkdwn_in: ['text']
      },
      {
        title: 'Configuring Bugbot',
        color: '#E3E4E6',
        text: "`/bugbot repo` ... display your current repo \n` " +
              "/bugbot repo org/reponame` ... change your repo \n`" +
              "/bugbot repos` ... list your repos \n`" +
              "/bugbot whoami` ... display your Github user \n`" +
              "/bugbot help` ... you're lookin' at it! \n`" +
              "/bugbot logout` ... revoke Bugbot's access to your Github",
        mrkdwn_in: ['text']
      },
      {
        title: 'Configuring Bugbot',
        color: '#E3E4E6',
        text: "`/bugbot xxx` ... set default repo \n` " +
              "/bugbot xxx` ... set second repo \n`" +
              "/bugbot xxx` ... add alias to repo \n`" +
              "/bugbot xxx` ... search repos \n`" +
              "/bugbot xxx` ... add issue to default repo \n`" +
              "/bugbot xxx` ... add issue with repo search" +
              "/bugbot xxx` ... fetch repos?",
        mrkdwn_in: ['text']
      },
      {
        title: 'Settings (Direct messages)',
        color: '#E3E4E6',
        text: "`/bugbot settings` ... settings management \n` " +
              "/bugbot account` ... settings management \n`",

        mrkdwn_in: ['text']
      }
    ];

module.exports = function(controller) {



  
  
    // This before middleware allows the help command to accept sub-thread names as a parameter
    // so users can say help to get the default thread, but help <subthread> will automatically
    // jump to that subthread (if it exists)
    controller.studio.before('help', function(convo, next) {

        // is there a parameter on the help command?
        // if so, change topic.
        if (matches = convo.source_message.text.match(/^help (.*)/i)) {
            if (convo.hasThread(matches[1])) {
                convo.gotoThread(matches[1]);
            }
        }

        next();

    });
  
    controller
         .hears(['^help2$'],
                'direct_message,direct_mention,mention',
                function(bot, message) {

          //var matches = message.match(/^help (.*)/i);
          //var text2 = message.matches[1];
          // console.log(matches, text2)
           
           
           // debug('bitch');
           // let response = {[text: array]};
           
           // indexes
          // help_bugbot,
          // help_cookbook,
          // help_dietary,
          // help_expenses,
          // help_family_budget,
          // help_fitness,
          // help_idea,
          // help_measurements,
          // help_recipe_add,
          // shopping_list,
          // help_restaurant_menu,
          // help_video 
           let response = {
              "text": help[0]
          }
            
           
           
           // let response = { text, attachments };
           bot.reply(message, 'Please specify a number.');
           bot.reply(message, response);
            //bot.reply(message, JSON.stringify(text2));
         });

}
