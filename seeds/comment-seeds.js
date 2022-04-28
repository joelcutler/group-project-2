const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Where is this?',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Great shot!',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Wish I were there and not in the office.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'I like your setup!',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'Killer boots man!',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Pura Vida!',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'Aloha!!!',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'This is what life is all about',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Good idea',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'Skat8ordie',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'groovy!!!!',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'I love coding tis zee best',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'I like your style',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'to the moon!',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'Rocks R cool',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Kanye 2024',
    user_id: 8,
    post_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
