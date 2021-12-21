function main() {
  addKeyword();
}

function addKeyword() {
  // If you have multiple adGroups with the same name, this snippet will
  // pick an arbitrary matching ad group each time. In such cases, just
  // filter on the campaign name as well:
  //
  // AdWordsApp.adGroups()
  //     .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
  //     .withCondition('CampaignName = "INSERT_CAMPAIGN_NAME_HERE"')
  var adGroupIterator = AdWordsApp.adGroups()
      .withCondition('Name = "Test"')
      .get();
  
  if (adGroupIterator.hasNext()) {
    var adGroup = adGroupIterator.next();

    adGroup.newKeywordBuilder()
        .withText('Hello world')
        .withCpc(1.25)                          // Optional
        .withFinalUrl('http://www.example.com') // Optional
        .build();

    // KeywordBuilder has a number of other options. For more details see
    // https://developers.google.com/google-ads/scripts/docs/reference/adwordsapp/adwordsapp_keywordbuilder
  }
}