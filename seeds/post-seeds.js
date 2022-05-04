const { Post } = require('../models');

const postData = [
  {
    title: 'Ski Japan',
    post_url: 'https://www.snowpak.com/japan/best-ski-resorts',
    user_id: 1
  },
  {
    title: 'Costa Rica Surf Camps',
    post_url: 'https://www.bestsurfdestinations.com/surf-camps-costa-rica/',
    user_id: 6
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
  {
    title: '9 Best Rock Climbing Destinations',
    post_url: 'https://climbingapex.com/rock-climbing-destinations/',
    user_id: 5
  },
  {
    title: 'Top Snowboard brands',
    post_url: 'https://www.dmarge.com/best-snowboard-brands',
    user_id: 3
  },
  {
    title: 'skate decks for sale',
    post_url: 'https://www.tactics.com/skateboard-decks',
    user_id: 4
  },
  {
    title: 'Alex Honnald gallery',
    post_url: 'https://www.tactics.com/skateboard-decks',
    user_id: 7
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
