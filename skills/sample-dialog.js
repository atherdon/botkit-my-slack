// var Botkit = require('../../lib/Botkit.js');

// if (!process.env.token) {
//   console.log('Error: Specify token in environment');
//   process.exit(1);
// }

// var controller = Botkit.slackbot({
//  debug: false
// });

// // part was not moved


// // messages. belong to threads
// // not working right now too
// // create a path for when a user says YES
// // convo.addMessage({
// //         text: 'How wonderful.',
// // },'yes_thread');
// //
// // // create a path for when a user says NO
// // // mark the conversation as unsuccessful at the end
// // convo.addMessage({
// //     text: 'Cheese! It is not for everyone.',
// //     action: 'stop', // this marks the converation as unsuccessful
// // },'no_thread');
// //
// // // create a path where neither option was matched
// // // this message has an action field, which directs botkit to go back to the `default` thread after sending this message.
// // convo.addMessage({
// //     text: 'Sorry I did not understand. Say `yes` or `no`',
// //     action: 'default',
// // },'bad_response');

// // like yes, no, erro branches
// // not working at this moment, due to passing additional data into array
// // let threads = [
// //   {
// //       pattern:  bot.utterances.yes,
// //       callback: function(response, convo) {
// //           convo.gotoThread('yes_thread');
// //       },
// //   },
// //   {
// //       pattern:  bot.utterances.no,
// //       callback: function(response, convo) {
// //           convo.gotoThread('no_thread');
// //       },
// //   },
// //   {
// //       default: true,
// //       callback: function(response, convo) {
// //           convo.gotoThread('bad_response');
// //       },
// //   }
// // ];

// // part added for make some adjustments

// //end

// functionA = (response, convo) => {
//   convo.ask("What flavor of pizza do you want?", function(response, convo) {
//     convo.say("Awesome.");
//     functionB(response, convo);
//     convo.next();
//   });
// };

// functionB = (response, convo) => {
//   convo.ask("What want what?", function(response, convo) {
//     convo.say("Awesome.");
//     functionC(response, convo);
//     convo.next();
//   });
// };

// functionC = (response, convo) => {
//   convo.ask("So when we must do this or that?", function(response, convo) {
//     convo.say("Good Bye");

//     // functionFinish(response, convo);
//     convo.next();
//   });
// };


// functionEnd = (convo) => {

//   convo.on('end', function(convo) {

//       if (convo.successful()) {
//           // this still works to send individual replies...
//           bot.reply(message, 'Let us eat some!');

//           // and now deliver cheese via tcp/ip...
//       }

//   });

// };


// modules.export = {
//   functionA,
//   functionB,
//   functionC,
//   functionEnd
// };