function main() {
  var keywords = AdWordsApp.keywords()
      .orderBy("Impressions DESC")
      .forDateRange("YESTERDAY")
      .withLimit(10)
      .get();

  Logger.log("10 keywords with most impressions yesterday");
  while (keywords.hasNext()) {
    var keyword = keywords.next();
    Logger.log(keyword.getText() + ": " +
        keyword.getStatsFor("YESTERDAY").getImpressions());
  }
}