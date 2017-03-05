var shopApp = angular.module('shopApp', []);

shopApp.controller('MasterCtrl', ['$scope', function($scope) {
  var mc = this;

  //
  mc.menuList = function() {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      async: false,
      url: "https://mishradilip.github.io/sharda-classes/api/menu.json",
      success: function(data) {
        mc.menulist = data.menu.items;
        console.log(data.menu.items);
      },
      error: function(xhr) {
        console.log('Error');
      }
    });
  }

  mc.init = function() {
    mc.menuList();
  }
}]);

// var myApp = angular.module('myApp', []);

// myApp.controller('GreetingController', ['$scope', function($scope) {
//   var mc = this;

//   //
//   mc.menuList = function() {
//     $.ajax({
//       type: 'GET',
//       dataType: 'json',
//       async: false,
//       url: "https://mishradilip.github.io/sharda-classes/api/menu.json",
//       success: function(data) {
//         console.log(data.menu.items);
//       },
//       error: function(xhr) {
//         console.log('Error');
//       }
//     });
//   }

//   mc.init = function() {
//     mc.menuList();
//   }
// }]);
