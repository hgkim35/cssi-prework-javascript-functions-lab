//==============================================================================
// Resources
//==============================================================================
// Functions - http://www.w3schools.com/js/js_functions.asp
//==============================================================================
// #1 - String Property: countChars
//==============================================================================
// Given a string, return the number of characters in that string
function countChars(userString) {
  //your code here
var howManyChars = userString.length
return howManyChars;
  //don't forget to return the number of characters (use return!)
}

//==============================================================================
// #2 - String Methods: addHashtag
//==============================================================================
//Given a string, add " #yolo" to the end of that string
function addHashtag(userString) {
  //your code here
  var yolo = userString + " #yolo";
  return yolo;
  //don't forget to return the number of characters (use return!)
}
//==============================================================================

//==============================================================================
// #2 - String Methods: excitedTweet
//==============================================================================
//Given a string, uppercase it and add "!!!" to the end of that string
function excitedTweet(userString) {
  //your code here
  var happyTweet = userString.toUpperCase() + "!!!"
  return happyTweet;
  //don't forget to return the number of characters (use return!)
}
//==============================================================================
