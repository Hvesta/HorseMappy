const el2 = document.getElementById('test2');
const el3 = document.getElementById('test3');
const el4 = document.getElementById('test4');
const button = document.getElementById('process');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');


// Event Handlers
button.addEventListener('click', showResults);

console.log(el1);
const transform = function(el) {
		console.log(el.innerHTML);
    return el.innerHTML.split(' ');
}

function showResults() {
	const result1 = searchClosestToZero(el1);
  answer1.innerHTML = `${result1}`;
  const result2 = searchClosestToZero(el2);
  answer2.innerHTML = `${result2}`;
  const result3 = searchClosestToZero(el3);
  answer3.innerHTML = `${result3}`;
  const result4 = searchClosestToZero(el4);
  answer4.innerHTML = `${result4}`;
 
}


function searchClosestToZero(element) {
  // Remplacer avec la solution trouvée
  let result;
 	const valeurs = transform(element);
  const valeursPositives = valeurs.filter(val => val > 0);
  const valeursNegatives = valeurs.filter(val => val < 0);

  const plusProcheZeroNegative = valeursNegatives.reduce(function(a,b) {
  return Math.max(a, b);
	});
  const plusProcheZeroPositive = valeursPositives.reduce(function(a,b) {
  return Math.min(a, b);
	});
	console.log(plusProcheZeroNegative, plusProcheZeroPositive);
  
	if(Math.abs(plusProcheZeroNegative) < Math.abs(plusProcheZeroPositive)){
		result = plusProcheZeroNegative;
	} else if (Math.abs(plusProcheZeroNegative) === Math.abs(plusProcheZeroPositive)){
		result = plusProcheZeroNegative;
	} else {
		result = plusProcheZeroPositive;
  }
	console.log(result);
	return result;
}


