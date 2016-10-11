'use strict'

function getMessage(a, b){
	var typeOfA = typeof a;
	var typeOfB = typeof b;
	if (typeOfA == 'boolean') {
		if (a === true){
			 return("Я попал в " + b);
		}
		else (a === false) {
    return("Я никуда не попал");
    }
	}else if (typeOfA == 'number'){
		  return("Я прыгнул на " + a * 100 + " сантиметров");
	}else if (typeOfA == 'object' && typeOfB != 'object'){
				var numberOfSteps = 0;
				for (var i =0; i < a.length; i++) {
					 numberOfSteps += a[i];
				}return("Я прошел " + numberOfSteps + " шагов");
	}else if (typeOfA == 'object' && typeOfB == 'object'){
			var c = [];
			for (i =0; i < a.length; i++){
				c.push(a[i] * b[i]); 
			}
			var distancePath = 0;
				for (var i =0; i < c.length; i++) {
					 distancePath += c[i];
				}return("Я прошел " + distancePath + " метров")   
	}else{
    return("Переданы некорректные данные");
  }
}