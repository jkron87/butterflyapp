'use strict';

/**
 * @ngdoc service
 * @name butterflyappApp.yelpapifactory
 * @description
 * # yelpapifactory
 * Factory in the butterflyappApp.
 */
angular.module('butterflyappApp')
.factory('MyYelpAPI', ['$http',
    function ($http) {

      var randomString = function (length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) {
          result += chars[Math.round(Math.random() * (chars.length - 1))];
        }
        return result;
      };

      var retrieveYelp = function (name, callback) {
        var method = 	'GET';
        var url = 		'http://api.yelp.com/v2/search';
        var params = {
          callback: 								'angular.callbacks._0',
          location: 								'48104',
          oauth_consumer_key: 			'XAj6qaNihVvooG8uB0Mg_g', // consumer key
          oauth_token: 							'6zEfT7oyziwzAYCs8mPskGUnCjEI4-Fp', //Token
          oauth_signature_method: 	'HMAC-SHA1',
          oauth_timestamp: 					new Date().getTime(),
          oauth_nonce: 							randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
          category_filter: 					'bowling',
          sort:                      2,
        }; // end params
        var consumerSecret = 				'6JyakyLKMF-cwZrJi3z4JrbACpY'; //Consumer Secret
        var tokenSecret = 					'Ipr_APAvZlMKR_VEMMDJPUk5hgk'; //Token Secret
        var signature =
          oauthSignature.generate(
            method,
            url,
            params,
            consumerSecret,
            tokenSecret,
            { encodeSignature: false }
          );
          // end signature
        params['oauth_signature'] = signature;
        $http.jsonp(url, { params : params })
          .success(callback);
      }; // end retrieveYelp

      return {
        retrieveYelp: retrieveYelp
      };

    } // end function

  ]); // end factory
