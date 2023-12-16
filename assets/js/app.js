function calculateFederalIncomeTaxAmount() {
    const incomeInput = document.getElementById("incomeInput");
    const income = parseFloat(incomeInput.value) || 0;
    const standardDeduction = 14600;
    const taxBrackets = [
      { min: 0, max: 11600, rate: 0.10 },
      { min: 11601, max: 47150, rate: 0.12 },
      { min: 47151, max: 100525, rate: 0.22 },
      { min: 100526, max: 191950, rate: 0.24 },
      { min: 191951, max: 243725, rate: 0.32 },
      { min: 243726, max: 609350, rate: 0.35 },
      { min: 609351, rate: 0.37 }
    ];
  
    let totalTax = 0;
    let taxableIncome = income - standardDeduction;
  
    for (const bracket of taxBrackets) {
      if (taxableIncome > bracket.min) {
        let taxInThisBracket = Math.min(taxableIncome, bracket.max) * bracket.rate;
        taxableIncome -= taxInThisBracket;
        totalTax += taxInThisBracket;
      }
    }
  
    const resultElement = document.getElementById("result");
    resultElement.textContent = `$ ${totalTax.toFixed(2)}`;
  }