"use srtict";

angular.module('DemoApp')
  .controller('DemoController', ['$http', DemoController]);

function DemoController($http) {

  var vm = this;

  var config = {
    method: 'GET',
    url: 'https://teamtreehouse.com/ethanweeks.json'
  };

  $http(config).then(onSuccess, onFailure);

  function onSuccess(response) {
    console.log(response);
    vm.display = response;
  }

  function onFailure(response) {
    console.log(response);
    vm.display = response;
  }

}
