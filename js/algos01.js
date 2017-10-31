
// Algo Practice - Arrays
console.log("Welcome to Algo Practice #1!")

// date: 10.29.2017

// This document is a worksheet of algos targeting array javascript functions.

// Fundamental Excercises:

// The Basic 13:

// Print 1-255:
// ************
function prntInts(){
	for (var i = 1;i <= 255; i++){
		console.log(i);
	}
}

prntInts();

// Print ints and sum 0-255:
// ****************************
function prntIntsAndSum(){
	var sum = 0;
	for(var i = 1; i <= 255; i++){
		console.log(i);
		sum += i;
	}
	console.log("the sum is, ", sum);
}

prntIntsAndSum();

// Find and Print Max:
// *********************

function findMax(arr){
	var max = arr[0];
	for(var i = 0; i < arr.length; i++){
		if(max < arr[i]){
			max = arr[i];
		}
	}
	console.log("the max of", arr," is ", max);
}

var x = [1,22165,32,678,4332,566,78,6565423,212678,4,34];

findMax(x);

// Array with Odds:
// *******************

function createOddArr1To255(){
	var arr=[];
	for(var i = 1; i <= 255; i++){
		if(i % 2 != 0){
			console.log(i);
			arr.push(i);
		}
	}
	console.log(arr);
}

createOddArr1To255();

// Greater than y:
// ***************

function greaterThanY(arr, y){
	var count = 0;
	for(var i = 0;i < arr.length;i++){
		if(arr[i] > y){
			console.log(arr[i]);
			count+=1;
		}
	}
	console.log("There are ",count," array elements greater than ",y,".");
}

var arr1 = [12,23,34,45,12,13,14,115,11];
greaterThanY(arr1, 23);

// Max, min, average:
// ******************

function findMaxMinAvg(arr){
	var max = arr[0];
	var min = arr[0];
	var sum = 0;
	var avg;
	console.log("there are ", arr.length," elements in the array.")
	for(var i = 0;i < arr.length;i++){
		if(max < arr[i]){
			max = arr[i];
		}
		if(min > arr[i]){
			min - arr[i];
		}
		sum += arr[i];
	}
	avg = sum/arr.length;
	console.log("Array Max: ", max);
	console.log("Array Min: ", min);
	console.log("Array Avg: ", avg);
}

var arr2 = [12, 14, 116, 18, 20, 4];
findMaxMinAvg(arr2);

// Swap negative numbers for Dojo:
// *******************************

function swapNegativeDojo(arr){
	for(var i = 0; i< arr.length; i++){
		if(arr[i] < 0){
			arr[i] = "Dojo";
		}
	}
	console.log(arr);
}

var arr3 = [12,34,45,-23,67,-78,-95,23,354,21];

swapNegativeDojo(arr3);

// Print Odds 1-255:
// *****************

function prntOdds1To255(){
	for(var i = 1;i <= 255;i++){
		if(i % 2 != 0){
			console.log(i);
		}
	}
}

prntOdds1To255();

// Print Array:
// ************

function prntArray(arr){
	for(var i = 0;i < arr.length; i++){
		console.log(arr[i]);
	}
}

var arr4 = [21,32,43,54,65,76,86,56,345,75];
prntArray(arr4);

// Get and Average array elements:
// *******************************

function averageArrayElements(arr){
	var sum = 0;
	var avg;
	for(var i = 0;i < arr.length;i++){
		sum += arr[i];
	}
	avg = sum/arr.length;
	console.log("the average of this array, ",arr,", is: ", avg);
}

var arr5 = [12,12,13,14,15,111,1667,13,15];
averageArrayElements(arr5);

// Square the values:
// ******************

function squareArrayElements(arr){
	var origArr = arr;
	for(var i = 0; i < arr.length; i++){
		arr[i] = arr[i]*arr[i];
	}
	console.log("the square of this array, ",origArr," is: ",arr);
}

var arr6 = [2,4,6,8,9,12,20,30,40,50];

squareArrayElements(arr6);

// Zero out nagatives:
// *******************

function settingNegsZero(arr){
	console.log("original array: ",arr);
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < 0){
			arr[i] = 0;
		}
	}
	console.log("zero neg array: ",arr);
}

var arr7 = [12,-123,-23,34,456,56,-678,887,-234];
settingNegsZero(arr7);

// Shift Array Values:
// *******************

function shiftArrayForwardOne(arr){
	console.log("original array: ", arr);
	for(var i = 0;i < arr.length; i++){
		if(i == arr.length - 1){
			arr[i] = 0;
		}else{
		arr[i] = arr[i + 1];
		}		
	}
	console.log("shifted by 1 array: ", arr);
}

var arr8 = [7,6,5,45];
shiftArrayForwardOne(arr8);

// Dedupe Array:
// *************

function dedupeArray1(arr){
	console.log("original array: ", arr);
	for(var i = 0; i < arr.length; i++){
		// console.log("i: ",i," arr[i]: ",arr[i]);
		for(var j = i+1;j < arr.length; j++){
			// console.log("i: ",i," arr[i]: ",arr[i]," j: ", j," arr[j]: ",arr[j]);
			if(arr[i] == arr[j]){
				for(var k = j+1; k < arr.length; k++){
					if(arr[j] != arr[k]){
						arr[j] = arr[k];
						arr.splice(k,1);
						break;
					}
				}
			}

		}
	}
	console.log("modified array: ", arr);
}

var arr9 = [1,2,1,1,3,4,5,3,6,7,8,4,5,9];
dedupeArray1(arr9);

function dedupeArray2(arr){
	console.log("original array: ", arr);
	for(var i = 0; i < arr.length; i++){
		for(var j = i+1;j < arr.length; j++){
			if(arr[i] == arr[j]){
				for(var k = j+1; k < arr.length; k++){
					if(arr[j] != arr[k]){
						arr[j] = arr[k];
						break;
					}
				}
			}
		}
	}
	for(var l = arr.length -1; l >= 0; l--){
		if(arr[l] == arr[l-1]){
			arr.pop();
		}else{
			break;
		}
	}
	console.log("modified array: ", arr);
}

var arr9b = [1,2,1,1,3,4,5,3,6,7,8,4,5,9];
var arr10 = [1,3,5,7,8,9,3,4,5,6,7,2,3,5,67,9,6]
dedupeArray2(arr9b);
dedupeArray2(arr10);