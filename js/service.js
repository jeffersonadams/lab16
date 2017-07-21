var app = angular.module('myModule');

app.factory('wordFactor', function() {
  var words = {};

  return {
    setWords: setWords,
    getWords: getWords;
  }
  function setWords(wordsObj){
    words=wordsObj;
    console.log(words);
  }
  function getWords() {
    return words;
  }
})
