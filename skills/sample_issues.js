// Login
// Get Auth by passportjs
// callback
// Search repos
// set repos
// get repo
// get or add an issue
// add title
// add description

module.exports = function(controller) {
  
  // So this is the starting point in our conversation
// controller.hears(['repos'], 'direct_message', (bot, message) => {

//   // At this place we'll call github and create an array with list of repositories




// let list = [
//     {title: 'Bot', url: 'botkit-my-slack'},
//     {title: 'GS', url: 'groceristar'},
//     {title: 'CutStream', url: 'cutstream-api'},
//     {title: 'Stripe Recurring membership', url: 'stripe-recurring-membership'}
//   ];

// console.log(list)
//   let attachments = [
//   {
//     title: 'Ad1',
//     color: '#2FA44F',
//     mrkdwn_in: ['text']
//   },
//   {
//     title: 'ad2',
//     color: '#E3E4E6',
//     mrkdwn_in: ['text']
//   },
//   {
//     title: 'ad3',
//     color: '#E3E4E6',
//     mrkdwn_in: ['text']
//   },
//   {
//     title: 'ad24',
//     color: '#E3E4E6',
//     mrkdwn_in: ['text']
//   }
// ];

// attachments.forEach(function(element, index) {

//     attachments[index].text  = 'https://github.com/atherdon/' + list[index].url + '/';
//     attachments[index].title = list[index].title;
// });
//   console.log(attachments);
// let text = `I'm here to help!\n`
// bot.reply(message, { text, attachments });



// });



// // listen for someone saying 'tasks' to the bot
// // reply with a list of current tasks loaded from the storage system
// // based on this user's id
// controller.hears(['issues','issue'], 'direct_message', function(bot, message) {

//   // load user from storage...
//   controller.storage.users.get(message.user, function(err, user) {

//           //bot.reply(message, 'reply');

//       // user object can contain arbitary keys. we will store tasks in .tasks
//       if (!user || !user.issues || user.issues.length == 0) {
//           bot.reply(message, 'There are no issues on your list. Say `add _task_` to add something.');
//       } else {

//           var text = 'Here are your current issues: \n' +
//               generateTaskList(user) +
//               'Reply with `done _number_` to mark a task completed.';

//           bot.reply(message, text);

//       }

//   });

// });

// // listen for a user saying "add <something>", and then add it to the user's list
// // store the new list in the storage system
// controller.hears(['add (.*)'],'direct_message,direct_mention,mention', function(bot, message) {

//   var newtask = message.match[1];
//   controller.storage.users.get(message.user, function(err, user) {

//       if (!user) {
//           user = {};
//           user.id = message.user;
//           user.issues = [];
//       }

//       user.issues.push(newtask);

//       controller.storage.users.save(user, function(err,saved) {

//           if (err) {
//               bot.reply(message, 'I experienced an error adding your task: ' + err);
//           } else {
//               bot.api.reactions.add({
//                   name: 'hankey',
//                   channel: message.channel,
//                   timestamp: message.ts
//               });
//           }

//       });
//   });

}
