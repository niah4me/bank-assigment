const tableBody = document.querySelector('tbody'); // Get the table body
function addRow(data) {
    const newRow = document.createElement('tr'); // Create a new row
    data.forEach(item => {
      const newCell = document.createElement('td'); // Create a new cell
      newCell.textContent = item; // Set the cell content
      newRow.appendChild(newCell); // Add the cell to the row
    });
    tableBody.appendChild(newRow); // Add the row to the table body
  }