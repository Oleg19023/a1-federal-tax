function calculateFederalIncomeTaxAmount() {
    const incomeInput = document.getElementById("incomeInput");
    const income = parseFloat(incomeInput.value) || 0;
    const standardDeduction = 14600;
    let taxIncome = income - standardDeduction;

    const taxBrackets = [0, 11600, 47150, 100525, 191950, 243725, 609350, Infinity];
    const taxRates = [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
    
    let totalTax = 0;
  
    if (taxIncome > 0) {
        for (let i = 0; i < taxBrackets.length; i++) {

            // Brackets
            let lowBracket = taxBrackets[i];
            let UpBracket = taxBrackets[i + 1];
            let rate = taxRates[i];

            if (taxIncome > UpBracket) {
                totalTax += (UpBracket - lowBracket) * rate;
            } else {
                totalTax = Math.round((totalTax + ((taxIncome - lowBracket) * rate)) * 100) / 100;
                break;
            }
        }
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = `$ ${totalTax.toFixed(2)}`;
}