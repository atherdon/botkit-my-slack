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
const _ = require('underscore');


let dialogos = require('/dialogs/sample-dialog');
console.log(dialogos);

// let replies =  require('/dialogs/sample-dialog');
// console.log(dialogos);


// const {
//   inlineCard,
//   displayCard,
//   resultsCard,
// } = require('../helpers')


//we're assuming that bot, message are in scope of this functions.
viewTasks = (err, user) => {
  bot.reply(message, 'reply');

  // user object can contain arbitary keys. we will store tasks in .tasks
  if (!user || !user.tasks || user.tasks.length == 0) {
    // replies[0]
    bot.reply(message, 'There are no tasks on your list. Say `add _task_` to add something.');
    next();
  };


  // else {
    // replies[0]
    var text = 'Here are your current tasks: \n' +
        generateTaskList(user) +
        'Reply with `done _number_` to mark a task completed.';

    bot.reply(message, text);

  // }
};

// addTask = function(err, user){
//   if (!user) {
//       user = {};
//       user.id = message.user;
//       user.tasks = [];
//   }
//
//   user.tasks.push(newtask);
//
//   saveTask
// };

completeTask = function(err, user){
  if (!user) {
      user = {};
      user.id = message.user;
      user.tasks = [];
  }

  if (number < 0 || number >= user.tasks.length) {
      // replies[0]
      bot.reply(message, 'Sorry, your input is out of range. Right now there are ' + user.tasks.length + ' items on your list.');
  } else {

      var item = user.tasks.splice(number,1);

      // reply with a strikethrough message...
      bot.reply(message, '~' + item + '~');

      if (user.tasks.length > 0) {
          // replies[0]
          bot.reply(message, 'Here are our remaining tasks:\n' + generateTaskList(user));
      } else {
          // replies[0]
          bot.reply(message, 'Your list is now empty!');
      }
  }
};

saveTask = (err, saved) => {
  if (err) {
      // replies[0]
      bot.reply(message, 'I experienced an error adding your task: ' + err);
      next();
  } else {
      bot.api.reactions.add({
          name: 'thumbsup',
          channel: message.channel,
          timestamp: message.ts
      });
  }
};

module.exports = function(controller) {

    // listen for someone saying 'tasks' to the bot
    // reply with a list of current tasks loaded from the storage system
    // based on this user's id
    controller.hears(['tasks','todo'], 'direct_message', function(bot, message) {

        // load user from storage...
        // controller.storage.users.get( viewTasks(err, user) );
        controller.storage.users.get(message.user, function(err, user) {

            //     bot.reply(message, 'reply');
            //
            // // user object can contain arbitary keys. we will store tasks in .tasks
            // if (!user || !user.tasks || user.tasks.length == 0) {
            //     bot.reply(message, 'There are no tasks on your list. Say `add _task_` to add something.');
            // } else {
            //
            //     var text = 'Here are your current tasks: \n' +
            //         generateTaskList(user) +
            //         'Reply with `done _number_` to mark a task completed.';
            //
            //     bot.reply(message, text);
            //
            // }

        });

    });

    // listen for a user saying "add <something>", and then add it to the user's list
    // store the new list in the storage system
    controller.hears(['addt (.*)'],'direct_message,direct_mention,mention', function(bot, message) {

        var newtask = message.match[1];
        controller.storage.users.get(message.user, function(err, user) {

            if (!user) {
                user = {};
                user.id = message.user;
                user.tasks = [];
            }

            user.tasks.push(newtask);

            // controller.storage.users.save( user, saveTask(err, saved) );


            controller.storage.users.save(user, function(err,saved) {

                if (err) {
                    bot.reply(message, 'I experienced an error adding your task: ' + err);
                } else {
                    bot.api.reactions.add({
                        name: 'thumbsup',
                        channel: message.channel,
                        timestamp: message.ts
                    });
                }

            });



        });

    });

    // listen for a user saying "done <number>" and mark that item as done.
    controller.hears(['done (.*)'],'direct_message', function(bot, message) {

        var number = message.match[1];

        if (isNaN(number)) {
            bot.reply(message, 'Please specify a number.');
        } else {

            // adjust for 0-based array index
            number = parseInt(number) - 1;

            // controller.storage.users.get( completeTask(err, user) );
            controller.storage.users.get(message.user, function(err, user) {

                if (!user) {
                    user = {};
                    user.id = message.user;
                    user.tasks = [];
                }

                if (number < 0 || number >= user.tasks.length) {
                    bot.reply(message, 'Sorry, your input is out of range. Right now there are ' + user.tasks.length + ' items on your list.');
                } else {

                    var item = user.tasks.splice(number,1);

                    // reply with a strikethrough message...
                    bot.reply(message, '~' + item + '~');

                    if (user.tasks.length > 0) {
                        bot.reply(message, 'Here are our remaining tasks:\n' + generateTaskList(user));
                    } else {
                        bot.reply(message, 'Your list is now empty!');
                    }
                }
            });
        }

    });


    // listen for a user saying "setting _name_", and then we display setting with such name
    controller.hears(['sett (.*)'], 'direct_message', function(bot, message){

      var setting_key = message.match[1];

      // here we're checking if user isset and if it have setting with name
      controller.storage.users.get(message.user, function(err, user) {
         if (user && user.setting_key) {
             bot.reply(message,'Your setting, ' + setting_key + ' = ' + user.setting_key);
         } else {
             bot.reply(message,'I don\'t know yet!');
         }
     });
    });

    // simple function to generate the text of the task list so that
    // it can be used in various places
    function generateTaskList(user) {

        var text = '';

        for (var t = 0; t < user.tasks.length; t++) {
            text = text + '> `' +  (t + 1) + '`) ' +  user.tasks[t] + '\n';
        }

        return text;

    }
}
