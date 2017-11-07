import github from 'bugbot-github-issues'

export default function whoami(payload, message) {
  github.user(payload.account.github_token, (err, user)=> {
    if (err) {
      message({text:err})
    }
    else {
      let usr = '`'+ user.login +'`'
      let text = `You're currently logged into Bugbot with Github user ${usr}`
      let color = '#E3E4E6'
      let mrkdwn_in = ['text']
      let thumb_url = user.avatar_url
      message({attachments:[
        {text, color, mrkdwn_in, thumb_url}
      ]})
    }
  })
}
