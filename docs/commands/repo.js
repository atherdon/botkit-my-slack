import slack from 'slack-express'
import github from 'bugbot-github-issues'

export default function repoCmd(payload, message, next) {

  let parts     = payload.message.text? payload.message.text.split(' ') : []
  let token     = payload.account.github_token
  let repo      = parts[1]
  let isReading = parts.length === 1

  if (isReading) {
    let repo = payload.account.github_repo
    if (repo) {
      let link = `<https://github.com/${repo}|${repo}>`
      let text = `Here's the repo I'm currently using to send and receive your Github Issues: ${link}`
      let color = '#E3E4E6'
      let mrkdwn_in = ['text']
         
      message({attachments:[{text, color, mrkdwn_in}]})
    }
    else {
      next()
    }
  }
  else {
    github.repos(token, (err, repos)=> {
      if (err) {
        message({text:err})
      }
      else {
        let found = repos.indexOf(repo) > -1
        if (found) {
          let acct = payload.account
          acct.github_repo = repo
          slack.save(acct, err=> {
            message({text: err? err : `Saved ${repo}`})
          })
        }
        else {
          message({text:`Sorry, Github not showing me ${repo}.`})
        }
      }
    })
  } 
///
}
