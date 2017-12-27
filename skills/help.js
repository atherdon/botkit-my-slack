let help_bugbot = 'You can say these things to me:\n'+
    '\t⦿ *next* – _Fed up with the track? Skip it._\n'+
    '\t⦿ *previous* – _Want to hear that again? Just ask._\n'+
    '\t⦿ *start again* / *over* – _Missed the beginning of the track? No problem._\n'+
    '\t⦿ *volume up* / *down* – _increases / decreases the volume_\n'+
    '\t⦿ *set volume* [1-100] – _sets the volume_\n'+
    '\t⦿ *status* – _I will tell information about the Spotify player_\n'+
    '\t⦿ *info* – _I will tell you about this track_\n'+
    '\t⦿ *detail* – _I will tell you more about this track_\n'+
    '\t⦿ *play* / *pause* – _plays or pauses the music_\n'+
    '\t⦿ *play track* [track name], *play track* [track name] - [artist] – _plays a specific track_\n'+
    '\t⦿ *play track* [track name] | [album] – _plays a specific track in the context of an album. You can add_ - [artist] _to either the track or the album to be more specific_\n'+
    '\t⦿ *play album* [album name], play album [album name] - artist – _plays a specific album_';

let array = [
      'You can say these things to me:',
      '\t⦿ *next* – _Fed up with the track? Skip it._',
      '\t⦿ *previous* – _Want to hear that again? Just ask._',
      '\t⦿ *start again* / *over* – _Missed the beginning of the track? No problem._',
      '\t⦿ *volume up* / *down* – _increases / decreases the volume_',
      '\t⦿ *set volume* [1-100] – _sets the volume_',
      '\t⦿ *status* – _I will tell information about the Spotify player_',
      '\t⦿ *info* – _I will tell you about this track_',
      '\t⦿ *detail* – _I will tell you more about this track_',
      '\t⦿ *play* / *pause* – _plays or pauses the music_',
      '\t⦿ *play track* [track name], *play track* [track name] - [artist] – _plays a specific track_',
      '\t⦿ *play track* [track name] | [album] – _plays a specific track in the context of an album. You can add_ - [artist] _to either the track or the album to be more specific_',
      '\t⦿ *play album* [album name], play album [album name] - artist – _plays a specific album_'
];


module.exports = function(controller) {


//   controller.hears(['^help$'],'direct_message,direct_mention,mention', function(bot, message) {
//     bot.reply(message,'You can say these things to me:\n'+
//         '\t⦿ *next* – _Fed up with the track? Skip it._\n'+
//         '\t⦿ *previous* – _Want to hear that again? Just ask._\n'+
//         '\t⦿ *start again* / *over* – _Missed the beginning of the track? No problem._\n'+
//         '\t⦿ *volume up* / *down* – _increases / decreases the volume_\n'+
//         '\t⦿ *set volume* [1-100] – _sets the volume_\n'+
//         '\t⦿ *status* – _I will tell information about the Spotify player_\n'+
//         '\t⦿ *info* – _I will tell you about this track_\n'+
//         '\t⦿ *detail* – _I will tell you more about this track_\n'+
//         '\t⦿ *play* / *pause* – _plays or pauses the music_\n'+
//         '\t⦿ *play track* [track name], *play track* [track name] - [artist] – _plays a specific track_\n'+
//         '\t⦿ *play track* [track name] | [album] – _plays a specific track in the context of an album. You can add_ - [artist] _to either the track or the album to be more specific_\n'+
//         '\t⦿ *play album* [album name], play album [album name] - artist – _plays a specific album_'
//         // 'play playlist [playlist name] – plays a specific playlist\n'+
//     );
// });


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

    let text = `I'm here to help!\n`

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

       controller
         .hears(['help2'],
                'direct_message,direct_mention,mention',
                function(bot, message) {

          //var matches = message.match(/^help (.*)/i);
          //var text2 = message.matches[1];

            bot.reply(message, 'Please specify a number.');
            bot.reply(message, { text, attachments });
            //bot.reply(message, JSON.stringify(text2));



    });

}
