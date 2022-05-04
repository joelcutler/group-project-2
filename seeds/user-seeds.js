const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
  {
    username: 'jimi09',
    email: 'jimi09@cbc.ca',
    password: 'password123'
  },
  {
    username: 'zappa77',
    email: 'zappa77@sogou.com',
    password: 'password123'
  },
  {
    username: 'paul44',
    email: 'paul44@last.fm',
    password: 'password123'
  },
  {
    username: 'danman1',
    email: 'danman1@gmail.com',
    password: 'password123'
  },
  {
    username: 'dirk44',
    email: 'dirk44@weather.com',
    password: 'password123'
  },
  {
    username: 'missmay66',
    email: 'missmay66@imdb.com',
    password: 'password123'
  },
  {
    username: 'ski4life',
    email: 'ski4life@feedburner.com',
    password: 'password123'
  },
  {
    username: 'pennies7',
    email: 'pennies7@china.com.cn',
    password: 'password123'
  },
  {
    username: 'robbin4',
    email: 'robbin4@google.ru',
    password: 'password123'
  },
  // {
  //   username: 'jdilla',
  //   email: 'jdilla@epa.gov',
  //   password: 'password123'
  // },

];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
