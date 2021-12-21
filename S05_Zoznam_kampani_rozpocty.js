function main() {
  var campaignIterator = AdWordsApp.campaigns().get();

while (campaignIterator.hasNext()) {
  var campaign = campaignIterator.next();
  Logger.log(campaign.getName() +
      "\t\t je aktivna: " + campaign.isEnabled() +
      "\t\t rozpocet: " + campaign.getBudget());
}
  
  var x = AdWordsApp.keywords().get().totalNumEntities();
var y = AdWordsApp.keywords().withLimit(5).get().totalNumEntities();
  
  Logger.log("x = " + x)
  Logger.log("y = " + y)
  
}