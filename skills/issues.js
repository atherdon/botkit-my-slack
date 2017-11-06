// issues + add

// https://github.com/smallwins/bugbot/tree/master/src/commands
module.exports = function(controller) {

	    // listen for someone saying 'tasks' to the bot
    // reply with a list of current tasks loaded from the storage system
    // based on this user's id
    controller.hears(['tasks','todo'], 'direct_message', function(bot, message) {

        // load user from storage...
        controller.storage.users.get(message.user, function(err, user) {

            // user object can contain arbitary keys. we will store tasks in .tasks
            if (!user || !user.tasks || user.tasks.length == 0) {
                bot.reply(message, 'There are no tasks on your list. Say `add _task_` to add something.');
            } else {

                var text = 'Here are your current tasks: \n' +
                    generateTaskList(user) +
                    'Reply with `done _number_` to mark a task completed.';

                bot.reply(message, text);

            }

        });
        

    });

};