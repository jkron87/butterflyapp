'use strict';

/**
 * @ngdoc function
 * @name butterflyappApp.controller:YelpapiCtrl
 * @description
 * # YelpapiCtrl
 * Controller of the butterflyappApp
 */
angular.module('butterflyappApp')
.controller('YelpapiCtrl', ['$scope', 'MyYelpAPI', function($scope, MyYelpAPI) {
      $scope.businesses = [];
      MyYelpAPI.retrieveYelp('', function(data) {

          $scope.randomNumber = Math.floor(Math.random() * 20);
        //yelp data
          $scope.businesses = data.businesses;
          $scope.category = $scope.businesses[$scope.randomNumber].categories[0][0];
          $scope.snippet = $scope.businesses[$scope.randomNumber].snippet_text.toLowerCase();
          $scope.name = $scope.businesses[$scope.randomNumber].name.toLowerCase();
          var regex = new RegExp($scope.name);
          $scope.snippetReplaced = $scope.snippet.replace(regex, "__________");
        // steve added latitude and longitude below
          $scope.latitude =
          $scope.businesses[$scope.randomNumber].location.coordinate.latitude;
          $scope.longitude =
          $scope.businesses[$scope.randomNumber].location.coordinate.longitude;
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



          console.log(data);


      });

  }]);
