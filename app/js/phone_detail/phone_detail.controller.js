'use strict';

angular.module('phonecat.phoneDetail').controller('PhoneDetailCtrl',
  ['$routeParams', 'Phone', function($routeParams, Phone) {
    var ctrl = this;
    ctrl.phone = Phone.get($routeParams.phoneId).then(function(phone) {
      ctrl.mainImageUrl = phone.images[0];
    });

    ctrl.setImage = function(imageUrl) {
      ctrl.mainImageUrl = imageUrl;
    };
  }]);
