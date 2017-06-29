angular
  .module('HaikuFail', [])
  .controller('AppCtrl', AppCtrl)
  .directive('randomBg', randomBg);

AppCtrl.$inject = ['Haiku'];

// function AppCtrl() {
function AppCtrl(Haiku) {
  var vm = this;

  vm.haiku = Haiku;
  // vm.haiku = batchHaiku(5);

  function batchHaiku(batchSize) {
    var batchedHaiku = [];
    for (var i = 0; i < Haiku.length; i += batchSize) {
      batchedHaiku.push(Haiku.slice(i, i + batchSize));
    }
    return batchedHaiku;
  }
}

function randomBg() {
  return {
    restrict: 'A',
    link: function($scope, element, attrs) {
      var bgClass = 'bg-' + rnd(1, 12);
      if (element[0].tagName !== 'BODY' && rnd(1, 10) <= 3) bgClass = 'bg';
      element.addClass(bgClass);
    }
  };
}

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
