const addButton = document.getElementById("addButton");
const main = document.getElementById("mainContainer");

addButton.addEventListener("click", function() {
    main.innerHTML = `
    <section class = "addInfoPage">
        <h3>Додати новий запис</h3>

        <div class = "info">
            <div class = "infoBlock">
                <p>Категорія</p>
                <select>
                    <option value = "fuel">Паливо</option>
                    <option value = "oil">Масло</option>
                    <option value = "accessories">Аксесуари</option>
                    <option value = "individual">Інше</option>
                </select>
            </div>

            <div class = "infoBlock">
                <p>Дата</p>
                <input type = "date">
            </div>

            <div class = "infoBlock">
                <p>Ціна</p>
                <input type = "number">
            </div>

            <div class = "infoBlock">
                <p>Пробіг</p>
                <input type = "number">
            </div>
        </div>

        <button>Додати</button>
    </section>
    `;
});