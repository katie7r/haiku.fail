angular
  .module('HaikuFail', [])
  .controller('AppCtrl', AppCtrl);

AppCtrl.$inject = ['Haiku'];

// function AppCtrl() {
function AppCtrl(Haiku) {
  var vm = this;

  // vm.haiku = Haiku;
  vm.haiku = batchHaiku(8);

  function batchHaiku(batchSize) {
    var batchedHaiku = [];
    for (var i = 0; i < Haiku.length; i += batchSize) {
      batchedHaiku.push(Haiku.slice(i, i + batchSize));
    }
    return batchedHaiku;
  }
}
