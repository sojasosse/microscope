if (Posts.find().count() != 4){
  Posts.insert({
    title: 'Introducing Telescope',
    author: 'Jim',
    flagged: false,
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor',
    author: 'Jim',
    flagged: false,
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    author: 'Bob',
    flagged: false,
    url: 'http://themeteorbook.com'
  });

  Posts.insert({
    title: 'Test',
    author: 'Bob',
    flagged: true,
    url: 'http://themeteorbook.com'
  });
}
