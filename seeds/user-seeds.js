const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
  {
    username: 'joel',
    email: 'joel@joel.com',
    password: 'pwpw',
    avatar: '🏂'
  },
  {
    username: 'jake',
    email: 'jake@jake.com',
    password: 'pwpw',
    avatar: '🚴'
  },
  {
    username: 'jimi09',
    email: 'jimi09@cbc.ca',
    password: 'pwpw',
    avatar: '⛷️',
  },
  {
    username: 'zappa77',
    email: 'zappa77@sogou.com',
    password: 'pwpw',
    avatar: '🏄‍♀️'
  },
  {
    username: 'paul44',
    email: 'paul44@last.fm',
    password: 'pwpw',
    avatar: '🚣'
  },
  {
    username: 'danman1',
    email: 'danman1@gmail.com',
    password: 'pwpw',
    avatar: '🏂'
  },
  {
    username: 'dirk44',
    email: 'dirk44@weather.com',
    password: 'pwpw',
    avatar: '⛷️'
  },
  {
    username: 'missmay66',
    email: 'missmay66@imdb.com',
    password: 'pwpw',
    avatar: '🧗‍♀️'
  },
  {
    username: 'ski4life',
    email: 'ski4life@feedburner.com',
    password: 'pwpw',
    avatar: '🚴'
  },
  {
    username: 'pennies7',
    email: 'pennies7@china.com.cn',
    password: 'pwpw',
    avatar: '🏄‍♀️'
  },
  {
    username: 'robbin4',
    email: 'robbin4@google.ru',
    password: 'pwpw',
    avatar: '🚣'
  },
  {
    username: 'jdilla',
    email: 'jdilla@epa.gov',
    password: 'pwpw',
    avatar: '🏂'
  }
];


const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
