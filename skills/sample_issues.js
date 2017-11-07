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


   
    // simple function to generate the text of the task list so that
    // it can be used in various places
    function generateTaskList(user) {

        var text = '';

        for (var t = 0; t < user.issues.length; t++) {
            text = text + '> `' +  (t + 1) + '`) ' +  user.issues[t] + '\n';
        }

        return text;

    }
}
