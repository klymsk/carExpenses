const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

let totalMoney = 0;
let totalMileage = 0;
let fuelCosts = 0;
let recordsCount = 0;

expenses.forEach(expense => {
    const price = parseFloat(expense.priceInput) || 0;
    const mileage = parseFloat(expense.mileageInput) || 0;
    const category = (expense.categoryInput || "").toLowerCase();

    totalMoney += price;
    totalMileage += mileage;
    recordsCount++;

    if (category.includes("паливо") || category.includes("бензин")) {
        fuelCosts += price;
    }
});

document.getElementById("totalMoney").textContent = totalMoney.toFixed(2);
document.getElementById("totalMileage").textContent = totalMileage.toFixed(1);
document.getElementById("fuelCosts").textContent = fuelCosts.toFixed(2);
document.getElementById("recordsCount").textContent = recordsCount;