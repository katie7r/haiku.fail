angular
  .module('HaikuFail')
  .factory('Haiku', haikuFactory);

function haikuFactory() {
  // This is not the best way to do this... but it sure is easy!
  return [
    ['I have let this go',       'Far too long without a new',         'Terrible haiku.'],
    ['How disappointing',        'To find out that today is',          'Not even Friday.'],
    ['The moon attempted',       'An (unsuccessful) high coup -',      'As I often do.'],
    // ['Though the sun prevailed', 'When set upon by the moon...',       'High coup attempted.'],
    ['Fro yo sounds so nice',    'When the summer saunters in -',      'That, or frozen ice.'],
    ['This is not quite done',   '(It does not like smaller screens) -', 'I should fix it soon.'],
    ['Working from my home',     'Curled up in the papasan:',          'Why I love Wednesdays.'],
    ['Pollen-dusted breeze',     'Wafting in through open door',       'Makes me want to sneeze.'],
    ['Piña coladas',             'And getting caught in the rain:',    'Both things I enjoy.'],
    ['AngularJS',                'Seems excessive for this page,',     'But - you know - who cares?'],
    ['Every now and then,',      'I will try a real haiku -',          'Still just fit for fun.'],
    ['Though I love haiku',      'Those I write are trivial -',        'I continue, still.'],
    ['Being green is hard',      'As Kermit the Frog taught me -',     'But it is worth it.'],
    ['Pollen falls like snow',   'Yellow thick on every car -',        'Tallahassee spring.'],
    ['Haiku break your heart -', 'Well, at least not break your mind', 'Or make you break wind!'],
    // ['', '', ''],
  ];
}
