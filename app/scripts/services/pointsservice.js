angular.module('butterflyappApp')
.factory("pointsService", function pointsPoints() {
	var oButton = document.getElementById("hint");
    var oText = document.getElementById("points");
    var count = 100;

    oButton.addEventListener('click', function() {


      	if (count>50) {
          	oText.innerHTML = count -= 10;
      		  } else {
      			oText.innerHTML = count = 50;
      		  }

     

    });



  

return {
		pointsPoints: pointsPoints,
	};


});
  



// .factory("pointsService", function pointsPoints2() {
// 	var oButton2 = document.getElementById("hint2");
//     var oText2 = document.getElementById("points2");
//     var count2 = 100;
//     oButton2.addEventListener('click', function() {


//       	if (count2>50) {
//           	oText2.innerHTML = count2 -= 10;
//       		  } else {
//       			oText2.innerHTML = count2 = 50;
//       		  }
//     }, false);


  
// return {
// 		pointsPoints2: pointsPoints2,
// 	};


// });

// .factory("pointsService", function pointsPoints3() {
// 	var oButton3 = document.getElementById("hint3");
//     var oText3 = document.getElementById("points3");
//     var count3 = 100;
//     oButton3.addEventListener('click', function() {


//       	if (count3>50) {
//           	oText3.innerHTML = count3 -= 10;
//       		  } else {
//       			oText3.innerHTML = count3 = 50;
//       		  }
//     }, false);


  
//   	return {
// 		pointsPoints3: pointsPoints3,
// 	};


	
// });