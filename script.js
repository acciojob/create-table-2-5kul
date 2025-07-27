function createTable() {
    // Get the table element by its ID
    const table = document.getElementById("myTable");

    // Ask the user for the number of rows
    const rows = prompt("Input number of rows");

    // Ask the user for the number of columns
    const cols = prompt("Input number of columns");

    // Validate the user input
    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Invalid input. Please enter positive numeric values.");
        return; // Exit the function if invalid input is detected
    }

    // Clear any existing table content
    table.innerHTML = "";

    // Create the table rows and columns dynamically
    for (let i = 0; i < rows; i++) {
        // Create a new row element
        const row = document.createElement("tr");

        for (let j = 0; j < cols; j++) {
            // Create a new cell (td element)
            const cell = document.createElement("td");

            // Set the content of the cell
            cell.textContent = `Row-${i} Column-${j}`;

            // Append the cell to the row
            row.appendChild(cell);
        }

        // Append the row to the table
        table.appendChild(row);
    }
}
