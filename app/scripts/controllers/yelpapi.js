'use strict';

/**
 * @ngdoc function
 * @name butterflyappApp.controller:YelpapiCtrl
 * @description
 * # YelpapiCtrl
 * Controller of the butterflyappApp
 */
angular.module('butterflyappApp')
.controller('YelpapiCtrl', ['$scope', 'MyYelpAPI', 'googlemapsservice', 'CheckGeo', '$uibModal', function($scope, MyYelpAPI, googlemapsservice, CheckGeo, $uibModal) {
      var vm = this;
      var winning1 = function () {
      vm.open = function () {
          var modalInstance = $uibModal.open({
              templateUrl: "views/modal-view-winning.html",
              controller: 'ModalCtrl as vm'
          });

      };
      vm.open();
      console.log('winning');
    };

    var winning2 = function () {
    vm.open = function () {
        var modalInstance = $uibModal.open({
            templateUrl: "views/modal-view-winning2.html",
            controller: 'ModalCtrl as vm'
        });

    };
    vm.open();
    console.log('winning');
  };

    var losing = function () {
    vm.open = function () {
        var modalInstance = $uibModal.open({
            templateUrl: "views/modalview.html",
            controller: 'ModalCtrl as vm'
        });
    };
    vm.open();
    console.log('losing');
  };

  var final = function () {
  vm.open = function () {
      var modalInstance = $uibModal.open({
          templateUrl: "views/winningview.html",
          controller: 'ModalCtrl as vm'
      });
  };
  vm.open();
  console.log('final');
};


      $scope.businesses = [];
      MyYelpAPI.retrieveYelp('', function(data) {
        console.log(data);
          $scope.randomNumber = Math.floor(Math.random() * 20);
        //yelp data
          $scope.businesses = data.businesses;
          $scope.category = $scope.businesses[$scope.randomNumber].categories[0][0];
          $scope.snippet = $scope.businesses[$scope.randomNumber].snippet_text.toLowerCase();
          $scope.name = $scope.businesses[$scope.randomNumber].name.toLowerCase();
          $scope.fullname = $scope.businesses[$scope.randomNumber].name;
          var regex = new RegExp($scope.name);
          $scope.snippetReplaced = $scope.snippet.replace(regex, "__________");
        // steve added latitude and longitude below
          var latitude =
          Number($scope.businesses[$scope.randomNumber].location.coordinate.latitude);

          var longitude =
          Number($scope.businesses[$scope.randomNumber].location.coordinate.longitude);

          $scope.imgurl = $scope.businesses[$scope.randomNumber].image_url;
          $scope.street = $scope.businesses[$scope.randomNumber].location.address[0].match(/\D+/).join('');
          //creates method to scramble letters
          Array.prototype.shuffle = function() {
          var i = this.length;
          if (i == 0) return this;
          while (--i) {
              var j = Math.floor(Math.random() * (i + 1 ));
              var a = this[i];
              var b = this[j];
              this[i] = b;
              this[j] = a;
          }
          return this;
        };

          $scope.shuffledName = $scope.businesses[$scope.randomNumber].name.split('').shuffle().join('');

          MyYelpAPI.increaseN();
          googlemapsservice.initMap(latitude, longitude);


          var latChecker = latitude.toFixed(3);
          var longChecker = longitude.toFixed(3);

          $scope.checkGeoClick = function () {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };

                CheckGeo.checkerYelp(latChecker, longChecker);
                $scope.testStuff = CheckGeo.test();

                if(pos.lat.toFixed(3) === latChecker && pos.long.toFixed(3) === longchecker && $scope.view1===true) {
                  console.log('you win clue1');
                  winning1();
                } else if (pos.lat.toFixed(3) === latChecker && pos.long.toFixed(3) === longchecker && $scope.view2===true) {
                  console.log("you win clue2");
                  winning2();
                } else if ($scope.view3 === true && pos.lat.toFixed(3) === latChecker && pos.long.toFixed(3) === longchecker) {
                  console.log("view three. you win the game");
                  final();
                } else {
                  console.log('you lose');
                  losing();
                }

              });
            };
            };


      });



  }]);
