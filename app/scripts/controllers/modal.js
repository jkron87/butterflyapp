(function () {
    'use strict';

    angular.module('butterflyappApp')
        .controller('ModalCtrl', ['$uibModalInstance', function ($uibModalInstance) {
            var vm = this;

            vm.close = function () {
              $uibModalInstance.close();
            };

        }]);

}());
