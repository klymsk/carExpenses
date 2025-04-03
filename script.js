
const addButton = document.getElementById("addButton");
const main = document.getElementById("mainContainer");


function displayExpenses() {

    let expenses = JSON.parse(localStorage.getItem("expenses"));
    if (!expenses) {
        expenses = []; 
    }

    main.innerHTML = "<h2>Загальна історія витрат</h2>"; 

    if (expenses.length === 0) {
        main.innerHTML += `
            <p>Ще немає витрат. Додайте перший запис.</p>
        `;
    }

    expenses.forEach((expense, index) => {
        const expenseElement = `
        <article>
            <section class="container">
                <h3>Витрата №<span>${index + 1}</span></h3>

                <div class="info">
                    <div class="infoBlock">
                        <p>Категорія</p>
                        <span>${expense.category}</span>
                    </div>

                    <div class="infoBlock">
                        <p>Дата</p>
                        <span>${expense.date}</span>
                    </div>

                    <div class="infoBlock">
                        <p>Ціна</p>
                        <span>${expense.price}</span>
                    </div>

                    <div class="infoBlock">
                        <p>Пробіг</p>
                        <span>${expense.mileage}</span>
                    </div>
                </div>

                <div class="buttons">
                    <button>
                        <img src="assets/edit.png" alt="Редагувати">
                    </button>
                    <button onclick="deleteExpense(${index})">
                        <img src="assets/delete.png" alt="Видалити">
                    </button>
                </div>
            </section>
        </article>
        `;
        main.innerHTML += expenseElement; 
    });

    main.innerHTML += `<button class="addButton" id="addButton">+</button>`;
    document.getElementById("addButton").addEventListener("click", function() {
        main.innerHTML = `
        <section class="addInfoPage">
            <h3>Додати новий запис</h3>
            <div class="info">
                <div class="infoBlock">
                    <p>Категорія</p>
                    <select id="category">
                        <option value="Паливо">Паливо</option>
                        <option value="Масло">Масло</option>
                        <option value="Аксесуари">Аксесуари</option>
                        <option value="Інше">Інше</option>
                    </select>
                </div>
                <div class="infoBlock">
                    <p>Дата</p>
                    <input type="date" id="date">
                </div>
                <div class="infoBlock">
                    <p>Ціна</p>
                    <input type="number" id="price">
                </div>
                <div class="infoBlock">
                    <p>Пробіг</p>
                    <input type="number" id="mileage">
                </div>
            </div>
            <button id="saveButton">Додати</button>
        </section>
        `;
    });
}

addButton.addEventListener("click", function() {
    main.innerHTML = `
    <section class="addInfoPage">
        <h3>Додати новий запис</h3>
        <div class="info">
            <div class="infoBlock">
                <p>Категорія</p>
                <select id="category">
                    <option value="fuel">Паливо</option>
                    <option value="oil">Масло</option>
                    <option value="accessories">Аксесуари</option>
                    <option value="individual">Інше</option>
                </select>
            </div>

            <div class="infoBlock">
                <p>Дата</p>
                <input type="date" id="date">
            </div>

            <div class="infoBlock">
                <p>Ціна</p>
                <input type="number" id="price">
            </div>

            <div class="infoBlock">
                <p>Пробіг</p>
                <input type="number" id="mileage">
            </div>
        </div>

        <button id="saveButton">Додати</button>
    </section>
    `;
});

document.body.addEventListener("click", function(e) {
    if (e.target && e.target.id === "saveButton") {
        const category = document.getElementById("category").value;
        const date = document.getElementById("date").value;
        const price = parseFloat(document.getElementById("price").value);
        const mileage = parseInt(document.getElementById("mileage").value);

        if (category && date && !isNaN(price) && !isNaN(mileage)) {
            let expenses = JSON.parse(localStorage.getItem("expenses"));
            if (!expenses) {
                expenses = []; 
            }

            const newExpense = {
                category: category,
                date: date,
                price: price,
                mileage: mileage
            };

            expenses.push(newExpense);

            localStorage.setItem("expenses", JSON.stringify(expenses));

            displayExpenses();
        } else {
            alert("Будь ласка, заповніть всі поля коректно.");
        }
    }
});

function deleteExpense(index) {
    let expenses = JSON.parse(localStorage.getItem("expenses"));
    if (!expenses) {
        expenses = [];
    }

    expenses.splice(index, 1);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();
}

displayExpenses();
