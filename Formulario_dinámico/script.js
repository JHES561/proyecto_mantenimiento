document.addEventListener("DOMContentLoaded", () => {
    const choice = document.getElementById("choice");
    const additionalFields = document.getElementById("additionalFields");

    choice.addEventListener("change", () => {
        additionalFields.innerHTML = ""; // limpieza

        if (choice.value === "books") {
            const label = document.createElement("label");
            label.textContent = "Ingrese nombre del autor:";
            const input = document.createElement("input");
            input.type = "text";
            input.name = "author";
            input.placeholder = "Ej: Gabriel García Márquez";

            additionalFields.appendChild(label);
            additionalFields.appendChild(input);

        } else if (choice.value === "movies") {
            const label = document.createElement("label");
            label.textContent = "Ingrese nombre del director:";
            const input = document.createElement("input");
            input.type = "text";
            input.name = "director";
            input.placeholder = "Ej: Steven Spielberg";

            additionalFields.appendChild(label);
            additionalFields.appendChild(input);
        }
    });
});
