//stealed from https://github.com/shaunburdick/slack-ooo-personal/blob/master/lib/config.js

'use strict';

/**
 * Parse a boolean from a string
 *
 * @param  {string} string A string to parse into a boolean
 * @return {mixed}         Either a boolean or the original value
 */
function parseBool (string) {
  if (typeof string === 'string') {
    return /^(true|1)$/i.test(string);
  }

  return string;
}

/**
 * Try to parse a string date into a timestamp.
 *
 * @param {string} string A string to parse into a boolean
 * @return {integer|null} The resulting timestamp or null
 */
function parseDate (string) {
  let retVal = null;

  if (parseInt(string, 10) === 0) {
    // handle "0" being Jan 1 2000 instead of Zero
    retVal = 0;
  } else if (parseInt(string, 10) === string) {
    // assume this is a timestamp already
    retVal = string;
  } else {
    retVal = (new Date(string)).getTime();
  }

  if (isNaN(retVal)) {
    retVal = null;
  }

  return retVal;
}

/**
 * Parse a comma separated list into an array
 * @param  {string}        string a comma separate list
 * @return {string[]|null}        Either an array of terms or null
 */
function parseList (string) {
  let retVal = null;

  if (string && typeof string === 'string') {
    retVal = string.split(/\s*,\s*/);
  }

  return retVal;
}

/**
 * Parses and enhances config object
 *
 * @param  {object} config the raw object from file
 * @return {object}        the paresed config object
 * @throws Error if it cannot parse object
 */
function parse (config) {
  if (typeof config !== 'object') {
    throw new Error('Config is not an object');
  }

  function getBaseUrl(prjName, config) {
    var configUrl;
    if (config.jira_urls[prjName]) {
      configUrl = config.jira_urls[prjName].url;
    } else {
      configUrl = config.jira_urls["DEFAULT"].url;
    }
    return configUrl;
  }


  function generateMsg(configUrl, issue, prefix) {
    return prefix + '<' + configUrl + issue.key + '|' + issue.key + '>';
  }

  function doSearch(splits, self, apis, requests) {
  }

//steal from https://github.com/IBM-Cloud/openwhisk-slackapp/blob/master/actions/slackapp-command.js
  /**
   * Gets the details of a given user through the Slack Web API
   *
   * @param accessToken - authorization token
   * @param userId - the id of the user to retrieve info from
   * @param callback - function(err, user)
   */
  function usersInfo(accessToken, userId, callback) {
    request({
      url: 'https://slack.com/api/users.info',
      method: 'POST',
      form: {
        token: accessToken,
        user: userId
      },
      json: true
    }, function (err, response, body) {
      if (err) {
        callback(err);
      } else if (body && body.ok) {
        callback(null, body.user);
      } else if (body && !body.ok) {
        callback(body.error);
      } else {
        callback('unknown response');
      }
    });
  }


  //https://github.com/mishk0/slack-bot-api/blob/master/index.js
  /**
     * Remove @ or # character from group | channel | user name
     * @param {string} name
     * @returns {string}
     */
    _cleanName (name) {
        if (typeof name !== 'string') {
            return name;
        }

        var firstCharacter = name.charAt(0);
        if (firstCharacter === '#' || firstCharacter === '@') {
            name = name.slice(1);
        }
        return name;
    }

    /**
     * Preprocessing of params
     * @param params
     * @returns {object}
     * @private
     */
    _preprocessParams(params) {
        params = extend(params || {}, {token: this.token});

        Object.keys(params).forEach(function(name) {
            var param = params[name];

            if (param && typeof param === 'object') {
                params[name] = JSON.stringify(param);
            }
        });

        return params;
    }

// ma functions - did you see it easily?

cheackIfMatchIsset = (match) => {
  // var shuffling = true;

  if(message.match && message.match[1]) {
    return true
      // if(message.match[1] === 'on') {
      //     shuffling = true;
      // }
      // else if(message.match[1] === 'off') {
      //     shuffling = false;
      // }
      // else {
      //     return;
      // }
  }
  return false;
};

cheackIfMatchIsset2 = (match, cb) => {
  // var shuffling = true;

  if(message.match && message.match[1]) {
      cb(true);
    // return true
      // if(message.match[1] === 'on') {
      //     shuffling = true;
      // }
      // else if(message.match[1] === 'off') {
      //     shuffling = false;
      // }
      // else {
      //     return;
      // }
  }
  cb(false); // @todo or error
  // return false;
};

cheakYesNo = (match) => {

  switch (match[1]){
    case 'yes':
      return true;
    break;

    case 'no':
      return false;
    break;

    default:
      return;
    break;
  }


};

cheakYesNo = (match) => {

  switch (match[1]){
    case 'on':
      return true;
    break;

    case 'off':
      return false;
    break;

    default:
      return;
    break;
  }


};

getUser = (response) => {
  return "@#{response.message.user.name}";
};

// function inviteMessage(inviter, channel) {
function inviteMessage(inviter) {

  let welcomeText = `Thanks for inviting me, ${inviter.name}! Good to be here :)\n`;
  bot.reply(message, welcomeText);

};

// part, related to displaying things at nice way
// stealed from https://github.com/howdyai/trello-ciscospark/blob/master/helpers.js
exports.displayCard = (data) => {
	var card = data.card;
	var board = data.board;
	var list = data.list ||  data.listAfter;

	var lines = [];

	lines.push(`\n\n> **[${card.name}](http://www.trello.com/c/${card.shortLink})**`);
	if (card.desc) {
		lines.push(`> ${card.desc}`);
	}
	lines.push(`> in *${list.name}* on [${board.name}](http://www.trello.com/b/${board.shortLink})`);

	var text = lines.join('\n\n');
	return text;
}

exports.inlineCard = (card) => {
	return `[${card.name}](http://www.trello.com/c/${card.id})`
}


exports.resultsCard = (card) => {
	return `[${card.name}](http://www.trello.com/c/${card.id}) in *${card.list.name}*`
}

// @todo add raven exception logger
// @todo check
failedToAddReaction = (err,res) => {

    if (err) {
        bot.botkit.log("Failed to add emoji reaction :(",err);
    }

};

// @todo maybe move to someother place
// display the results
searchResult = (vars, message) => {
  let response
  if(true){
      response = `Search results for \`{{vars.query}}\` ` +
                `from [**${message.trello_channel.board.name}**]` +
                `(${message.trello_channel.board.url}) on Trello:\n\n{{{vars.results}}}`;
  } else {
    response = `No match for \`{{vars.query}}\` ` +
               `in [**${message.trello_channel.board.name}**]` +
               `(${message.trello_channel.board.url}) on Trello.`,
  }

};

// can be object, can be array
// @todo finish and test and use
isFieldPresent = (myObj, key_or_value) => {
  console.log(_.contains(['aaa', 'bbb', 'cfp', 'ddd'], 'cfp'));

  if (_.some(myObj, function(o) { return _.has(o, "three"); })) {

    console.log('vadiaaaa')

  }

};

//@todo to test it.
viewByType = (myObj, type) => {

// myObj.data - contain an arrays of array with a single row
  let response
  _.map(myObj.data, item => {
    if( item.type == type ){
      response.push(item);
    }

  });

  return response;

};



//
// module.exports = {
//   parse,
//   parseDate,
//   parseBool,
//   parseList
// };
