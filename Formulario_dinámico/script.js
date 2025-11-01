document.getElementById("choice").addEventListener("change", function() {
    const value = this.value;
    const additionalFields = document.getElementById("additionalFields");

    additionalFields.innerHTML = "";

    if (value === "books") {
        additionalFields.innerHTML = `
            <label for="author">Autor:</label>
            <input type="text" id="author" name="author" placeholder="Nombre del autor">
        `;
    } else if (value === "movies") {
        additionalFields.innerHTML = `
            <label for="director">Director:</label>
            <input type="text" id="director" name="director" placeholder="Nombre del director">
        `;
    }
});