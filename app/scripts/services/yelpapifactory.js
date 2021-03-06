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
      var n = 0;
      var increaseN = function(){
        n++;
      };


      var retrieveYelp = function (name, callback, city, term) {
        var method = 	'GET';
        var url = 		'https://api.yelp.com/v2/search';
        var params = {
          callback: 								'angular.callbacks._' + n,
          location: 								city || 'Detroit',
          oauth_consumer_key: 			'XAj6qaNihVvooG8uB0Mg_g', // consumer key
          oauth_token: 							'vUKFulWbm-pTggwflZaVg84u5YyNF_-i', //Token
          oauth_signature_method: 	'HMAC-SHA1',
          oauth_timestamp: 					new Date().getTime(),
          oauth_nonce: 							randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
          radius_filter:             1600,
          term:                      term || '',
        }; // end params
        var consumerSecret = 				'6JyakyLKMF-cwZrJi3z4JrbACpY'; //Consumer Secret
        var tokenSecret = 					'ctJxIlpYuLTjASTZnfX7cMO3THc'; //Token Secret
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
        retrieveYelp: retrieveYelp,
        increaseN : increaseN
      };

    } // end function

  ]); // end factory
