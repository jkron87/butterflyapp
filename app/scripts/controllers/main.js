(function () {
    'use strict';

    angular.module('butterflyappApp')
        .controller('MainCtrl', [function () {
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
