function main(){
  
  var menoKlienta = "Adam Sangala";
  Logger.log(menoKlienta)
  
  var spreadsheet = SpreadsheetApp.create("Daily Report");
// Populate the spreadsheet.
// ...
Logger.log("Daily report ready!");
Logger.log(spreadsheet.getUrl());
  Logger.log(spreadsheet.getActiveCell());
  spreadsheet.getActiveRange();
  spreadsheet.getActiveSheet();
  spreadsheet.getCurrentCell();
  spreadsheet.getSheetId();
  spreadsheet.getLastColumn();
  spreadsheet.getNumSheets();
    spreadsheet.getOwner()
}

function vypocitaj_zostatok_prostriedok_kampane() {
    Logger.log("Si v druhej funkcii...")

}
