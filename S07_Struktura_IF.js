function main() {
  var cenaKlik = 1.4;
  
  // true/false
/*   if (cenaKlik >= 1.5) {
      	Logger.log("Cena je vysoka...");
      }
  else {
    Logger.log("Cena je nizka...");
  }
  */
  
 /* if (cenaKlik < 1.0) {
    Logger.log("Cena je nizka...");
  } else if (cenaKlik < 1.5) {
    Logger.log("Cena je OK");         
  } else {
    Logger.log("Cena je vysoka...");
  } */
  // ...
  
  // Logicke operatory AND && Log. súčin, OR || Log. súčet, NOT ! negácia
  // Matematicke operatory + - * / % ^
  
   if (cenaKlik >= 1.0 && cenaKlik < 1.5 ) {
    Logger.log("Cena je OK");
  } else {
    Logger.log("Cena nie je OK");
  }
}