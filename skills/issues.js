// issues + add

// https://github.com/smallwins/bugbot/tree/master/src/commands
module.exports = function(controller) {

	    // listen for someone saying 'tasks' to the bot
    // reply with a list of current issues loaded from the storage system


    // based on this user's id
    controller.hears(
    	['issues','issue'],
    	'direct_message',
    	(bot, message) => {

    		// console.log(message);
    		// console.log(message.user);
    		// bot.reply(message, JSON.stringify( message ))
    		// bot.reply(message, JSON.stringify( message.user ))
    		// console.log(bot);


        // load user from storage...
	        controller.storage.users.get(message.user, 
	        	function(err, user) {



	            // user object can contain arbitary keys. we will store issues in .tasks
	            // if (!user || !user.issues || user.issues.length == 0) {
	            //     bot.reply(message, 'There are no tasks on your list. ' + 
	            //     	'Say `add _issue_` to add something.');
	            // } else {

	            //     var text = 'Here are your current tasks: \n' +
	            //         generateTaskList(user) +
	            //         'Reply with `done _number_` to mark a task completed.';

	            //     bot.reply(message, text);

	            // }

	            bot.reply(message, 'the pidor is wailable')




	        });


    });

};