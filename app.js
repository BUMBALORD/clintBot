require('dotenv').config();

const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

const app = new Snoowrap({
  userAgent: 'clint-howard-bot',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS
});

const client = new Snoostorm(app);

const streamOpts = {
  subreddit: 'testingground4bots',
  results: 25
};

const comments = client.CommentStream(streamOpts);

comments.on('comment', (comment) => {
  if (comment.body.includes('Clint Howard')){
    comment.reply('https://media.giphy.com/media/9OK34hNPQO17W/giphy.gif');
  }
});

