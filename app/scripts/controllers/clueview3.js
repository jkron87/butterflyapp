'use strict';

/**
 * @ngdoc function
 * @name butterflyappApp.controller:Clueview3Ctrl
 * @description
 * # Clueview3Ctrl
 * Controller of the butterflyappApp
 */
angular.module('butterflyappApp')


  .controller('Clueview3Ctrl', function ($scope) {
   	var oButton3 = document.getElementById("hint3");
    var oText3 = document.getElementById("points3");
    var count3 = 100;

    oButton3.addEventListener('click', function() {


      	if (count3>50) {
          	oText3.innerHTML = count3 -= 10;
      		  } else {
      			oText3.innerHTML = count3 = 50;
      		  }

      		  return count3;
    	});
    // Get the modal to create it
    var modal = document.getElementById('myModal');
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    //Get the text of the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


.controller('Clueview3Ctrl', function ($scope, $route) {
  $scope.reloadRoute = function() {
    $route.reload();
  }

   // 	var oButton3 = document.getElementById("hint3");
    // var oText3 = document.getElementById("points3");
    // var count3 = 100;
    //
    // oButton3.addEventListener('click', function() {
    //
    //
    //   	if (count3>50) {
    //       	oText3.innerHTML = count3 -= 10;
    //   		  } else {
    //   			oText3.innerHTML = count3 = 50;
    //   		  }
    //
    //   		  return count3;
    // 	});
    // // Get the modal to create it
    // var modal = document.getElementById('myModal');
    // // Get the button that opens the modal
    // var btn = document.getElementById("myBtn");
    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];
    // //Get the text of the modal
    // btn.onclick = function() {
    //     modal.style.display = "block";
    // }
    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //     modal.style.display = "none";
    // }
    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }


    window.fbAsyncInit = function() {
  FB.init({
    appId      : '1242898765729130',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use graph api version 2.5
  });

  // Now that we've initialized the JavaScript SDK, we call
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
 });


// .controller('Clueview3Ctrl', ['$scope', 'pointsService', function ($scope, pointsService) {
//   	$scope.pointsPoints;
//
//   }]);
