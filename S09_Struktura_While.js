function main() {
  
  
  Logger.log("-----Abs-----");
  Logger.log(Math.abs(-5));
  Logger.log(Math.abs(5));
   Logger.log("-----Ceil-----");
  Logger.log(Math.ceil(5.001));
  Logger.log(Math.ceil(5.999));
  Logger.log(Math.ceil(5));
  
  Logger.log("-----Floor-----");
  Logger.log(Math.floor(5.001));
  Logger.log(Math.floor(5.999));
  Logger.log(Math.floor(5));
  
  Logger.log("-----round-----");
  Logger.log(Math.round(5.001));
  Logger.log(Math.round(5.999));
  Logger.log(Math.round(5.55));

  
  Logger.log("-----sqrt-----");
  Logger.log(Math.sqrt(81));
  
  Logger.log("-----pow-----");
  Logger.log(Math.pow(2, 5));
  
  Logger.log("-----rand-----");
  Logger.log(Math.max(-5,-1));
  Logger.log(Math.min(-5,-1));
  // Logger.log(Math.trunc(256.646));
  
 var i = 1;
  var aktualnyDatum = new Date();
  while(i < 10) {
    Logger.log("--> " + (aktualnyDatum.getSeconds()) + "-" + (aktualnyDatum.getMonth() + 1) + " " +  i + ".");
    i++;
  }
}