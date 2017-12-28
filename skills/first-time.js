
module.exports = function(controller) {
  const admin_user = process.env.admin_user
  const bot = controller.spawn({})
  
  // goal, setup new user who isnt in the DB already
  controller.on('setupUser', (bot, message) => {
    bot.reply(message, `Please [authorize your Trello account here](${process.env.public_address}/login?user=${message.user}&channel=${message.channel})`)
  });
};
