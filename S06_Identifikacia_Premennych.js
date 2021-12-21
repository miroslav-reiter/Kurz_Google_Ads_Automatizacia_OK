function main() {
	var memoKampane = "SK_VYHL_Nova";
	var meno = new String("SK_VYHL_Dalsia");
	var datum = new Date();
	var vyskaRozpoctu = 1500.89;
	var faktura = new Object();
	var jeKampanSpustena = true;
	var status = undefined;
	var CPC = 1.3;
	Logger.log("Meno kampane je: " + memoKampane);
	Logger.log("Datovy typ mena kampane je: " + typeof(memoKampane));
	Logger.log("Datovy typ datum je: " + typeof(datum));
	Logger.log("Datovy typ vyskaRozpoctu je: " + typeof(vyskaRozpoctu));
	Logger.log("Datovy typ faktura je: " + typeof(faktura));
	Logger.log("Datovy typ jeKampanSpustena je: " + typeof(jeKampanSpustena));
	Logger.log("Datovy typ meno je: " + typeof(meno));
	Logger.log("Datovy typ status je: " + typeof(status));
	Logger.log("Datovy typ CPC je: " + typeof(CPC));
}
