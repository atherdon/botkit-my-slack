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
    const _ = require('underscore');
    // listen for someone saying 'tasks' to the bot
    // reply with a list of current tasks loaded from the storage system
    // based on this user's id
    controller.hears(['settings','account', 'se'], 'direct_message', function(bot, message) {

        // load user from storage...
        controller.storage.users.get(message.user, function(err, user) {

            // bot.reply(message, 'settings and account');
          
            let settings = [
              {type:'Github connected', value: false},
              {type:'Default repo', value: false},
              {type:'Aliases enabled', value: false},
              {type:'Repos', value: false},
              {type:'Assign assignee by default', value: false},
              {type:'Assign to you by default', value: false},
              {type:'Add description', value: false},
              {type:'Upload screenshots', value: false},
              {type:'Add bug label by default?', value: false},
              {type:'Do you want to have copy: added with EARWIG help', value: false}
            ];
          
            // user object can contain arbitary keys. we will store tasks in .tasks
            if (!user || !user.settings || user.settings.length == 0) {
              
                // bot.reply(message, 'There are no settings on your list. Say `set _setting_` to add setting.');
                
                // this will be a duplicate of functionality from set function
              // :todo change it later
              
              // console.log(settings);
              
              if (!user) {
                  user = {};
                  user.id = message.user;
                  user.settings = settings;
              }
              user.settings = settings;
              // console.log(user);
              // :todo duplicates
               var text = 'Here are your current settings list: \n' +
                    generateSettingsList(user);
              
              bot.reply(message, text);
              // user.settings.push(newtask);
              
              
            } else {

              // if (!user) {
              //     user = {};
              //     user.id = message.user;
                  // user.settings = settings;
              // }
              console.log(user);
              // :todo duplicates
               // var text = 'Here are your current settings list: \n' +
                    // generateSettingsList(user);
              
              // bot.reply(message, text);
              // console.log(user);
//                 var text = 'Here are your current settings list: \n' +
//                     generateSettingsList(user);
//               // +
//               //       'Reply with `done _number_` to mark a task completed.';

//                 bot.reply(message, text);

              // console.log(message.user.settings)
              
            }

        });

    });

    // listen for a user saying "add <something>", and then add it to the user's list
    // store the new list in the storage system
    controller.hears(['set (.*)'],'direct_message,direct_mention,mention', function(bot, message) {

//         var newtask = message.match[1];
//         controller.storage.users.get(message.user, function(err, user) {

//             if (!user) {
//                 user = {};
//                 user.id = message.user;
//                 user.tasks = [];
//             }

//             user.tasks.push(newtask);

//             controller.storage.users.save(user, function(err,saved) {

//                 if (err) {
//                     bot.reply(message, 'I experienced an error adding your task: ' + err);
//                 } else {
//                     bot.api.reactions.add({
//                         name: 'thumbsup',
//                         channel: message.channel,
//                         timestamp: message.ts
//                     });
//                 }

//             });
//         });

    });

    // listen for a user saying "done <number>" and mark that item as done.
    controller.hears(['done (.*)'],'direct_message', function(bot, message) {

//         var number = message.match[1];

//         if (isNaN(number)) {
//             bot.reply(message, 'Please specify a number.');
//         } else {

//             // adjust for 0-based array index
//             number = parseInt(number) - 1;

//             controller.storage.users.get(message.user, function(err, user) {

//                 if (!user) {
//                     user = {};
//                     user.id = message.user;
//                     user.tasks = [];
//                 }

//                 if (number < 0 || number >= user.tasks.length) {
//                     bot.reply(message, 'Sorry, your input is out of range. Right now there are ' + user.tasks.length + ' items on your list.');
//                 } else {

//                     var item = user.tasks.splice(number,1);

//                     // reply with a strikethrough message...
//                     bot.reply(message, '~' + item + '~');

//                     if (user.tasks.length > 0) {
//                         bot.reply(message, 'Here are our remaining tasks:\n' + generateTaskList(user));
//                     } else {
//                         bot.reply(message, 'Your list is now empty!');
//                     }
//                 }
//             });
//         }

    });

    // simple function to generate the text of the settings list so that
    // it can be used in various places
    function generateSettingsList(user) {
   
        var text = '';
        // console.log(user);
      // console.log( 
        _.map(user.settings, function(val){ 
          // console.log(val) 
          
          text = text + '> `' +  (t + 1) + '`) ' +  val.type + ' : ' + val.value + '\n';  
          
        });
      // _.each(user.settings, function(a){console.log('2')});
      // ) ;
        // _.map(user.settings, (value) => {
        //   console.log('i', value);
        // }); 
      // console.log('dick');
      
        // for (var t = 0; t < user.settings.length; t++) {
        //     console.log(user.settings[t]);
        //     text = text + '> `' +  (t + 1) + '`) ' +  user.settings[t] + '\n';
        // }

        return text;

    }
}
