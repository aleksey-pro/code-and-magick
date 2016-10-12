'use strict'

function getMessage(a, b){
	var typeOfA = typeof a;
	if (a) {
		if (a === true) {
			return "Я попал в " + b;
		}
		else {
      return "Я никуда не попал";
    }
	}if (typeOfA == 'number'){
		  return "Я прыгнул на " + a * 100 + " сантиметров";
	}if (Array.isArray(a) && !Array.isArray(b)){
				var numberOfSteps = 0;
				for (var i =0; i < a.length; i++) {
					 numberOfSteps += a[i];
				}
          return "Я прошел " + numberOfSteps + " шагов";
	}if (Array.isArray(a) && Array.isArray(b)){
    var distancePath = 0;
    for (i =0; i < a.length; i++){
    distancePath += a[i] * b[i];
  }
    return "Я прошел " + distancePath + " метров";
	}else{
    return "Переданы некорректные данные";
  }
}

