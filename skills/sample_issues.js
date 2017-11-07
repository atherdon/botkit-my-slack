/*

    This is a sample bot that provides a simple todo list function
    and demonstrates the Botkit storage system.

    Botkit comes with a generic storage system that can be used to
    store arbitrary information about a user or channel. Storage
    can be backed by a built in JSON file system, or one of many
    popular database systems.

    See:

        botkit-storage-mongo
        botkit-storage-firebase
        botkit-storage-redis
        botkit-storage-dynamodb
        botkit-storage-mysql

*/

module.exports = function(controller) {

    // listen for someone saying 'tasks' to the bot
    // reply with a list of current tasks loaded from the storage system
    // based on this user's id
    controller.hears(['issues','issue'], 'direct_message', function(bot, message) {

        // load user from storage...
        controller.storage.users.get(message.user, function(err, user) {

                //bot.reply(message, 'reply');

            // user object can contain arbitary keys. we will store tasks in .tasks
            if (!user || !user.issues || user.issues.length == 0) {
                bot.reply(message, 'There are no issues on your list. Say `add _task_` to add something.');
            } else {

                var text = 'Here are your current issues: \n' +
                    generateTaskList(user) +
                    'Reply with `done _number_` to mark a task completed.';

                bot.reply(message, text);

            }

        });

    });
  
      // listen for a user saying "add <something>", and then add it to the user's list
    // store the new list in the storage system
    controller.hears(['addi (.*)'],'direct_message,direct_mention,mention', function(bot, message) {

        var newtask = message.match[1];
        controller.storage.users.get(message.user, function(err, user) {

            if (!user) {
                user = {};
                user.id = message.user;
                user.issues = [];
            }

            user.issues.push(newtask);

            controller.storage.users.save(user, function(err,saved) {

                if (err) {
                    bot.reply(message, 'I experienced an error adding your task: ' + err);
                } else {
                    bot.api.reactions.add({
                        name: 'hankey',
                        channel: message.channel,
                        timestamp: message.ts
                    });
                }

            });
        });

    });

    controller.hears(['repos'], 'direct_message', (bot, message) => {
      
        let list = [
          'botkit-my-slack',
          'groceristar',
          'cutstream-api',
          'stripe-recurring-membership'
        ];
      console.log(list)
        let attachments = [
        { 
          title: 'Ad1', 
          color: '#2FA44F',
          //text: "`/bugbot add Your Issue Title` submit a new issue \n`/bugbot issues` show your open issues",
          mrkdwn_in: ['text']
        },
        { 
          title: 'ad2', 
          color: '#E3E4E6',
          //text: "`/bugbot repo` ... display your current repo \n`/bugbot repo org/reponame` ... change your repo \n`/bugbot repos` ... list your repos \n`/bugbot whoami` ... display your Github user \n`/bugbot help` ... you're lookin' at it! \n`/bugbot logout` ... revoke Bugbot's access to your Github",
          mrkdwn_in: ['text']
        },
        { 
          title: 'ad3', 
          color: '#E3E4E6',
          //text: "`/bugbot repo` ... display your current repo \n`/bugbot repo org/reponame` ... change your repo \n`/bugbot repos` ... list your repos \n`/bugbot whoami` ... display your Github user \n`/bugbot help` ... you're lookin' at it! \n`/bugbot logout` ... revoke Bugbot's access to your Github",
          mrkdwn_in: ['text']
        },
        { 
          title: 'ad24', 
          color: '#E3E4E6',
          //text: "`/bugbot repo` ... display your current repo \n`/bugbot repo org/reponame` ... change your repo \n`/bugbot repos` ... list your repos \n`/bugbot whoami` ... display your Github user \n`/bugbot help` ... you're lookin' at it! \n`/bugbot logout` ... revoke Bugbot's access to your Github",
          mrkdwn_in: ['text']
        }
      ];
      
      attachments.forEach(function(element, index) {
          
          attachments[index].text = 'https://github.com/atherdon/' + list[index] + '/';
      });
        console.log(attachments);
      let text = `I'm here to help!\n`
      bot.reply(message, { text, attachments });
      
      
      
    });
  
  
  
  controller.on('slash_command', function (bot, message) {
    
    controller.storage.users.get(message.user, function(err, user) {
      
        switch (message.command) {
          case '/repos':
            bot.replyPrivate(message, 'boopbeep')
            break
          case '/task':
            bot.replyPrivate(message, 'boopbeep')
            break  
          
          case '/repo':
            bot.replyPrivate(message, 'boopbeep')
            break 
          
          case '/whoami':
            bot.replyPrivate(message, 'boopbeep')
            break 
            
            
          default:
            bot.replyPrivate(message, "Sorry, I'm not sure what that command is")
            
        }
      
      
       //console.log("slash_command callback fired -- SUCCESS");
       //bot.reply(message, "received `" + message.command + " " + message.text + "`");  
      
    });
    
    
  });
   
  
  controller.on(['settings', 'set (.*)'], 'direct_message', (bot, message) => {
    
    let list = [
      '<detault settings repo>',
      '<second>',
      '<third>',
      
      'other',
      
      'logout'
    ];
    list.forEach(function(element, index) {
          
          //attachments[index].text = 'https://github.com/atherdon/' + list[index] + '/';
      });
        console.log(list);
    bot.reply(message, list);
    
    
  });
  
  
    // simple function to generate the text of the task list so that
    // it can be used in various places
    function generateTaskList(user) {

        var text = '';

        for (var t = 0; t < user.issues.length; t++) {
            text = text + '> `' +  (t + 1) + '`) ' +  user.issues[t] + '\n';
        }

        return text;

    }
  
};
