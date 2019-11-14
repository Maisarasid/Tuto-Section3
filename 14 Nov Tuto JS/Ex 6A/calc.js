function squareNumber(num){
var squaredNumber = num * num;
console.log('The result of squaring number '+ num + ' is '+ squaredNumber);
  return squaredNumber;
}

var btnsquare= document.getElementById("square-button");
btnsquare.addEventListener('click', function() {
 var num = document.getElementById('square-input').value;
  document.getElementById("solution").innerHTML = squareNumber(num);
});


function halfOf(num){
var halvedNum = num/2;
console.log('The result of half number '+ num + ' is '+ halvedNum);
  return halvedNum;
}
var btnhalf= document.getElementById("half-button");
btnhalf.addEventListener("click", function() {
 var num = document.getElementById("half-input").value;
  document.getElementById("solution").innerHTML = halfOf(num);
});


function percentOf(num1, num2){
var percentNum=(num1/num2)*100;
console.log('The result of percent of ' + num1 + ' and' + num2 + ' represents the ' + percentNum + '%');
return percentNum;
}

var btnpercent= document.getElementById("percent-button");
btnhalf.addEventListener("click", function() {
  var num1 = document.getElementById("percent1-input").value;
  var num2 = document.getElementById("percent2-input").value;
  document.getElementById("solution").innerHTML = percentOf(num1,num2);
});


function areaOfCircle(num){
var area =3.412* num * num;
console.log('The result area circle of radius ' +num + ' is ' +  area);
return area;
}

var btnarea= document.getElementById("area-button");
btnarea.addEventListener("click", function() {
  var num = document.getElementById("area-input").value;
  document.getElementById("solution").innerHTML = areaOfCircle(num);
});
