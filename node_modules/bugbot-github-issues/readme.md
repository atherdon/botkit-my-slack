# Bugbot Github Issues

A small library for working with Github Issues.

[ ![Codeship Status for smallwins/bugbot-github-issues](https://codeship.com/projects/c97b1f00-75fe-0133-56d0-4e2d2a189916/status?branch=master)](https://codeship.com/projects/118081)

[![bitHound Overalll Score](https://www.bithound.io/github/smallwins/bugbot-github-issues/badges/score.svg)](https://www.bithound.io/github/smallwins/bugbot-github-issues)

[![bitHound Dependencies](https://www.bithound.io/github/smallwins/bugbot-github-issues/badges/dependencies.svg)](https://www.bithound.io/github/smallwins/bugbot-github-issues/master/dependencies/npm)

### Dev Setup

Create a file `.env` in the root and set the following:

```
GITHUB_CLIENT_SECRET=your secret here
GITHUB_CLIENT_ID=your app id here
NODE_ENV=development
TOKEN=""
```

Use a repl or the tests to exchange a register link callback code for a token which you can add to `.env` for convenience.

### Test

    npm test


## API

```
  github
    describe
    register((err, link)=>)
    token(code, (err, token)=>)
    repos(token, (err, repos[])=>)
    issues(token, repoID, (err, issues[])=>)
```
