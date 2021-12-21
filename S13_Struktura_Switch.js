function main() {
  var entita = "ad"; // keyword
  var volba = "ke";
  
  
  switch(volba){
    case "ad":  // if (volba === 1)
      		Logger.log("ad");
            entita = "ad";
      		break;
    case "ke":
      		Logger.log("Vybral si keyword...");
      		entita = "keyword";
      		break;
    case "ca":
      		Logger.log("Vybral si campaign...");
            entita = "campaign";
      		break;
    default:
      Logger.log("Vybral si neexistujucu volbu...");
      		break;
  }
  // ...
  
  var iterator = AdWordsApp.campaigns().get();
  Logger.log("ID\t\tNazov kampane \tRozpocet \tDatum zacatia \tStrategia ponukania cien");
  
 /* while(iterator.hasNext()){
        Logger.log(iterator.next().getId() + "\t" + iterator.next().getName() + "\t" + iterator.next().getBudget()
         + "\t\t" + iterator.next().getStartDate().year + "\t\t" + iterator.next().getBiddingStrategyType());
   } */
  
  Logger.log("Pocet kampani: " + iterator.totalNumEntities());  
  Logger.log("-------------");  
  
  var iteratorKlucoveSlova = AdWordsApp.keywords().get();
  
  while(iteratorKlucoveSlova.hasNext()){
     Logger.log(iteratorKlucoveSlova.next().getText() + "\t" + iteratorKlucoveSlova.next().getMatchType() + "\t" 
                + iteratorKlucoveSlova.next().getQualityScore());   
 } 
  
  Logger.log("Pocet klucovych slov: " + iteratorKlucoveSlova.totalNumEntities());  
  Logger.log("-------------");  
  
  
}