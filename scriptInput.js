const saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", function() {
    const categoryInput = document.getElementById("categoryInput").value;
    const dateInput = document.getElementById("dateInput").value;
    const priceInput = document.getElementById("priceInput").value;
    const mileageInput = document.getElementById("mileageInput").value;

    if (categoryInput && dateInput && priceInput && mileageInput) {
        const expenseArr = {
            categoryInput,
            dateInput,
            priceInput,
            mileageInput
        };

        const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
        expenses.push(expenseArr);

        localStorage.setItem("expenses", JSON.stringify(expenses));

        window.location.href = 'index.html';
    }
});