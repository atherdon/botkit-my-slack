let text = `I'm here to help!\n`

let attachments = [
  { 
    title: 'Adding and accessing your Github Issues', 
    color: '#2FA44F',
    text: "`/bugbot add Your Issue Title` submit a new issue \n`/bugbot issues` show your open issues",
    mrkdwn_in: ['text']
  },
  { 
    title: 'Configuring Bugbot', 
    color: '#E3E4E6',
    text: "`/bugbot repo` ... display your current repo \n`/bugbot repo org/reponame` ... change your repo \n`/bugbot repos` ... list your repos \n`/bugbot whoami` ... display your Github user \n`/bugbot help` ... you're lookin' at it! \n`/bugbot logout` ... revoke Bugbot's access to your Github",
    mrkdwn_in: ['text']
  }
]

export default function help(payload, message) {
  message({text, attachments})
}
