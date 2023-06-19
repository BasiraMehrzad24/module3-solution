

(function (window) {
  var helloSpeaker = {};
  helloSpeaker.names = ["Yaakov", "Paul", "Frank", "Larry", "Paula", "Laura"];
  var speakWord = "Hello";

  helloSpeaker.speak = function () {
    console.log(speakWord + " " + helloSpeaker.names);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
