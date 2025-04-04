const addButton = document.getElementById("addButton");
const main = document.getElementById("mainContainer");

addButton.addEventListener("click", function() {
    window.location.href = "input.html";
});


function loadContainer() {
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    expenses.forEach((expense, index) => {
        const containerCreate = document.createElement("section");
        containerCreate.classList.add("container");

        containerCreate.innerHTML = `
            <h3>Витрата №<span>${index +1}</span></h3>

            <div class = "info">
                <div class = "infoBlock">
                    <p>Категорія</p>
                    <span id = "categoryMain">${expense.categoryInput}</span>
                </div>

                <div class = "infoBlock">
                    <p>Дата</p>
                    <span id = "dateMain">${expense.dateInput}</span>
                </div>

                <div class = "infoBlock">
                    <p>Ціна</p>
                    <span id = "priceMain">${expense.priceInput}</span>
                </div>

                <div class = "infoBlock">
                    <p>Пробіг</p>
                    <span id = "mileageMain">${expense.mileageInput}</span>
                </div>
            </div>

            <div class = "buttons">
                <button>
                    <img src = "assets/edit.png">
                </button>
                <button>
                    <img src = "assets/delete.png">
                </button>
            </div>
        `;

        main.appendChild(containerCreate);
    });
};

loadContainer();

