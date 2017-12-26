var debug = require('debug')('botkit:channel_join');

module.exports = function(controller) {

    controller.on('bot_channel_join', (bot, message) => {

      let inviterId = message.inviter;
      // let channelId = message.channel;
      var inviter;
      inviteMessage(inviter);
      // var channel;

        controller.studio
        	.run(
        		bot,
        		'channel_join',
        		message.user,
        		message.channel,
        		message
        	)
        	.catch(function(err) {
            debug('Error: encountered an error loading onboarding script from Botkit Studio:', err);
          });
        	//onboarding will be here?

    });


}
