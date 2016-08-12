angular.module('butterflyappApp')
.factory("pointsService", function () {
	var oButton = document.getElementById("hint1");
    var oText = document.getElementById("points1");
    var count = 100;
    oButton.addEventListener('click', function() {


      	if (count1>50) {
          	oText.innerHTML = count1 -= 10;
      		  } else {
      			oText.innerHTML = count1 = 50;
      		  }
    }, false);


  });
};