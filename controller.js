"use srtict";

angular.modul('DemoApp')
  .controller('DemoController', ['$http', DemoController]);

function DemoController($http) {
  var vm = this;

  var config = {
    method: 'GET';
    url: '/subreddits/popular'
  };

  $http(config).then(onSuccess, onFailiure)

  function onSuccess(response) {
    console.log(response);
    vm.display = response;
  }

  function onFailure(response) {
    console.log(response);
    vm.display = response;
  }

}
