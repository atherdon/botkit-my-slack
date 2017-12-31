//
// let help_bugbot = 'You can say these things to me(just type help in the channel):\n'+
//     '\tList of commands\n'+
//     '\t⦿ \n'+
//     '\t⦿ \n'+
//     '\t⦿ \n'+
//     '\t⦿ \n'+
//     '\t⦿ \n'+
//     '\t⦿ \n'+
//     '\t⦿ \n'+
//     '\t⦿ \n'+
//     '\t⦿ \n'
//     ;

let help_bugbot = 'You can say these things to me(just type help in the channel):\n'+
    '\tList of commands\n'+
    '\t⦿ `help` : this list\n'+
    '\t⦿ `add` : add an issue\n'+
    '\t⦿ `auth` : login\n'+
    '\t⦿ `issues` : list of all issues\n'+
    '\t⦿ `logout` : logout from all\n'+
    '\t⦿ `repo` pick : pick a repository to work with\n'+
    '\t⦿ `repos` : list of all repositories\n'+
    '\t⦿ `alias` : list of all repositories\n'+
    '\t⦿ `search` : list of all repositories\n'
    ;


let help_cookbook = 'You can say these things to me(just type help in the channel):\n'+
    '\tList of commands\n'+
    '\t⦿ `help` : this list\n'+
    '\t⦿ `recipe` add: add a new recipe into your cookbook\n'+
    '\t⦿ `view` _cookbookName_ : search for a cookbook, display data in a proper way\n'
    ;


let help_dietary = 'You can say these things to me(just type help in the channel):\n'+
    '\tList of commands\n'+
    '\t⦿ `help` : this list\n'+
    '\t⦿ `calendar` : manage your diet calendar\n'+
    '\t⦿ `calendar` _add_ : add new item\n'+
    '\t⦿ `calendar` _view_ : view diet calendar - current week only\n'+
    '\t⦿ `create` _dietName_ : create a new diet\n'+
    '\t⦿ `manage` _dietName_ : manage your diet\n'+
    '\t⦿ `calories` : list of your eaten calories\n'+
    '\t⦿ `calories` _add_ : add a new meal with calories\n'+
    '\t⦿ `ingredients` : View list of ingredients of your diet\n'+
    '\t⦿ `steps` : or description - it\'s like a step-by-step plan what you must to do or what goal you must an accomplish\n'
    ;


let help_expenses = 'You can say these things to me(just type help in the channel):\n'+
    '\tList of commands\n'+
    '\t⦿ `help` : this list\n'+
    '\t⦿ `add` : add a new purchased item\n'+
    '\t⦿ `view` _name_ : view details about purchased item\n'+
    '\t⦿ `view` list : view list of purchased items\n'+
    '\t⦿ `delete` _nameOrNumber_ : Delete item from the list\n'+
    '\t⦿ `ingredients`: Display list of purchsed ingredients Can be converted later to /items\n'+
    '\t⦿ `beer` : Track how much beer did you buy\n'+
    '\t⦿ `apartment` : Add your monthly apartment costs\n'+
    '\t⦿ `wifi`  : Add your monthly internet costs\n'+
    '\t⦿ `glowing` : add how much you spend on this month on electricity\n'
    '\t⦿ `calendar` : Calendar view with your must-to-purhase or pay stuff\n'
    '\t⦿ `grid` : display stuff in a grid view\n'
    '\t⦿ `view` _date_: view by date\n'
    '\t⦿ `add` prices: just track prices via comma\n'
    '\t⦿ `add` price: [name, sum, date] format - add single purchased item\n'
    '\t⦿ `calculate` _dateOrMonth_: How much did you spend on date or by month\n'
    ;


let help_family_budget = 'You can say these things to me(just type help in the channel):\n'+
    '\tList of commands\n'+
    '\t⦿ `help` : this list\n'+
    '\t⦿ `add` _purchase_: add a new item into list\n'+
    '\t⦿ `view` : view all purchases\n'+
    '\t⦿ `view` _type_ : view purchases by type\n'+
    '\t⦿ `calculate`: Calculate something\n'
    ;


let help_fitness = 'You can say these things to me(just type help in the channel):\n'+
    '\tList of commands\n'+
    '\t⦿ `help` : this list\n'+
    '\t⦿ `jogging` _text_: add your new train\n'+
    '\t⦿ `hike` _text_ : add your new train\n'+
    '\t⦿ `workout` _text_ : add your new train\n'+
    '\t⦿ `yoga` _text_ : add your new train\n'+
    '\t⦿ `log` : what we can check with this? food log?\n'+
    '\t⦿ `view` _categoryName_: display data, related to some of category\n'+
    '\t⦿ `view` all: display all data, pushed in some last days. maybe week\n'+
    '\t⦿ `weight` _text_: Track your weight\n'+
    '\t⦿ `calories` _text_: Track your weight\n'
    '\t⦿ `steps` _text_: Track your weight\n'
    ;

let help_idea = 'You can say these things to me(just type help in the channel):\n'+
    '\tList of commands\n'+
    '\t⦿ `help` : this list\n'+
    '\t⦿ `add` _title_, _description_, _priority_, _monetization_ : add an idea. Monetization is yes/no question\n'+
    '\t⦿ `push` _repository_ : push to repo\n'
    ;



let help_measurements = 'You can say these things to me(just type help in the channel):\n'+
    '\tList of commands\n'+
    '\t⦿ `help` : this list\n'+
    '\t⦿ `add` : add a new measurement into database\n'+
    '\t⦿ `view` _type_ : search by type and display a list or related items (1 kg is)\n'+
    '\t⦿ `view` all : display all information that we have\n'+
    '\t⦿ `convertation`: Convert from one into another\n'+
    '\t⦿ `multiplication` _values_ :  _values__ == "1kg, 0.5kg"\n'
    ;


let help_recipe_add = 'You can say these things to me(just type help in the channel):\n'+
    '\tList of commands\n'+
    '\t⦿ `help` : this list\n'+
    '\t⦿ `view` all : display all added recipes\n'+
    '\t⦿ `view` one : display only one recipe - by name???\n'+
    '\t⦿ `view` date : display by date\n'+
    '\t⦿ `calendar` : calendar with what???\n'+
    '\t⦿ `preview` : preview recipes, maybe? for what reason???\n'
    ;


let shopping_list = 'You can say these things to me(just type help in the channel):\n'+
    '\tList of commands\n'+
    '\t⦿ `help` : this list\n'+
    '\t⦿ `directions` : list with directions from your current list\n'+
    '\t⦿ `view` _directionName_ : search for a direction, display ingredients/items in list view\n'+
    '\t⦿ `groceries` : Display list of your saved groceries\n'+
    '\t⦿ `add` _groceryListName_ : Create a new grocery list\n'+
    '\t⦿ `clone` _groceryIdOrName_ : Will create a new version of grocery list by cloning other list\n'+
    '\t⦿ `list` _category_ : List of ingredients by category\n'+
    '\t⦿ `delete` _number_ : remove ingredient from grocery list\n'+
    '\t⦿ `purchase` _number_ : make an ingredient purchased\n'+
    '\t⦿ `share` _groceryListId_ : share current GL with other people\n'
    ;


let help_restaurant_menu = 'You can say these things to me(just type help in the channel):\n'+
    '\tList of commands\n'+
    '\t⦿ `help` : this list\n'+
    '\t⦿ `menu` : list current items\n'+
    '\t⦿ `menu` _type_ : create menu items in this category - maybe????\n'+
    '\t⦿ `item` _price_, _category_ : Add item into menu with price and category.\n'+
    '\t⦿ `add` _name_, _measurement_, _price_ : Add item with measurements, like "salad 350g", like "long island 300ml"\n'+
    '\t⦿ `preview` : check how it looks\n'+
    '\t⦿ `list` : list view\n'+
    '\t⦿ `grid` : grid view\n'
    ;



let help_video = 'You can say these things to me(just type help in the channel):\n'+
    '\tList of commands\n'+
    '\t⦿ `help` : this list\n'+
    '\t⦿ `view` _nameOrNumber_ : search and display video\n'+
    '\t⦿ `view` all : display list with all saved videos\n'+
    '\t⦿ `add` _text_ : Add video\n'+
    '\t⦿ `add` completed : video marked as watched\n'+
    '\t⦿ `view` _onlyNewVideos_ : see fresh first\n'
    ;



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
