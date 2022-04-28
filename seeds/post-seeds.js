const { Post } = require('../models');

const postdata = [
  {
    title: 'Ski Japan',
    post_url: 'https://www.snowpak.com/japan/best-ski-resorts',
    user_id: 10
  },
  {
    title: 'Costa Rica Surf Camps',
    post_url: 'https://www.bestsurfdestinations.com/surf-camps-costa-rica/',
    user_id: 8
  },
  {
    title: '5 BEST SKATE PARKS IN SOUTHERN CALIFORNIA',
    post_url: 'http://www.rockinboard.com/5-best-skate-parks-in-southern-california/',
    user_id: 1
  },
  {
    title: 'Awesome Skate Art!',
    post_url: 'http://jimbophillips.com/',
    user_id: 4
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
