import github from 'bugbot-github-issues'

export default function addIssueToGithub(payload, message) {

  let txt = {
    title: payload.message.text.replace('add', ''),
    token: payload.account.github_token,
    repoID: payload.account.github_repo
  }
  
  github.add(txt, (err, issue)=> {
    if (err) {
      message({text:err})
    }
    else {
      let text = 'Okay, I created a new issue!'

      let attachments = [{ 
        title: txt.title, 
        title_link: issue.url,
        color: '#2FA44F',
        text: `Please don't forget to add your label, milestone, and assignee by <${issue.url}|editing the issue on Github>.`,
        mrkdwn_in: ['text']
      }]
      
      message({text, attachments})  
    }
  })
}
