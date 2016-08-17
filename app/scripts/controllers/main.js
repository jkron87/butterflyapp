(function () {
    'use strict';

    angular.module('butterflyappApp')
        .controller('MainCtrl', ['$scope', 'MyYelpAPI', '$location', function ($scope, MyYelpAPI, $location) {
          $scope.runYelp = function () {
            MyYelpAPI.retrieveYelp('', function (response) {
              console.log('New York', response);
            }, $scope.city, $scope.term);
          };
          $scope.goToView1 = function () {
            return $location.path('/clueview1').search({city: $scope.city, term: $scope.term});
          };

            $(document).ready(function($) {
              $('#accordion').find('.accordion-toggle').click(function(){

                // //Hide the other panels
                 $(".accordion-content").not($(this).next()).slideUp('fast');

                //Expand or collapse this panel
                $(this).next().slideToggle('fast');

              });
            });

        }]);

}());
