angular
  .module('HaikuFail')
  .factory('Haiku', haikuFactory);

function haikuFactory() {
  // This is not the best way to do this... but it sure is easy!
  return [
    ['Haiku break your heart -', 'Well, at least not break your mind', 'Or make you break wind!'],
    ['Pollen falls like snow',   'Yellow thick on every car -',        'Tallahassee spring.'],
    ['Being green is hard',      'As Kermit the Frog taught me -',     'But it is worth it.'],
    ['Though I love haiku',      'Those I write are trivial -',        'I continue, still.'],
    ['Every now and then,',      'I will try a real haiku -',          'Still just fit for fun.'],
    ['AngularJS',                'Seems excessive for this page,',     'But - you know - who cares?'],
    ['Piña coladas',             'And getting caught in the rain:',    'Both things I enjoy.']
    // ['', '', ''],
  ];
}
