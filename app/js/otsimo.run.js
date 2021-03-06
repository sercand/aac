/*
  -- otsimo.run.js
  This javascript file is used to initilize and communicate with otsimo native app.
  Whole app fired by otsimo.run()
  The setting changes are reflected to app in this file in real time.

*/


var responsiveVoiceDriver = {}

responsiveVoiceDriver.speak = function (text) {
    if (responsiveVoice) {
        responsiveVoice.speak(text);
    }
}

responsiveVoiceDriver.setVoice = function (voice) {
    if (responsiveVoice) {
        responsiveVoice.setDefaultVoice(voice);
    }
}

responsiveVoiceDriver.getVoice = function () {
    return ""
}

responsiveVoiceDriver.voiceList = function () {
    return [];
}

otsimo.onSettingsChanged(function (settings, sound) {
  var otsGridSize = otsimo.settings.gridsize.split("grid-")[1];
  var otsGridXY = otsGridSize.split("x");
  runApp(otsGridXY[0], otsGridXY[1]);
});


otsimo.run(function () {
    if (!otsimo.isWKWebView) {
        otsimo.tts.setDriver(responsiveVoiceDriver);
        if(otsimo.child.language == "tr"){
          otsimo.tts.setVoice("Turkish Female");
        }else if(otsimo.child.language == "en"){
          otsimo.tts.setVoice("US English Female");
        }else{
          console.log("This language for development is not recognized.");
        }
    }

    var otsGridSize = otsimo.settings.gridsize.split("grid-")[1];
    var otsGridXY = otsGridSize.split("x");
    runApp(otsGridXY[0], otsGridXY[1]);
});
