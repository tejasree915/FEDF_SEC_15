document.addEventListener('DOMContentLoaded', () => {
    // Automatically create 2x2 matrices on page load, matching the initial state in the image
    createMatrix('A');
    createMatrix('B');
});

/**
 * Creates the input fields for a matrix based on the specified dimensions.
 * @param {string} matrixId 'A' or 'B'
 */
function createMatrix(matrixId) {
    // Get dimensions and container elements based on the matrix ID
    const rows = parseInt(document.getElementById(`rows${matrixId}`).value);
    const cols = parseInt(document.getElementById(`cols${matrixId}`).value);
    const container = document.getElementById(`matrix${matrixId}_container`);

    // Basic validation
    if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) {
        alert("Please enter valid positive dimensions for Matrix " + matrixId);
        return;
    }

    // Clear previous content
    container.innerHTML = '';
    
    // Create the matrix grid container
    const matrixDiv = document.createElement('div');
    matrixDiv.className = 'matrix';
    // Set up the CSS Grid layout dynamically
    matrixDiv.style.gridTemplateColumns = `repeat(${cols}, auto)`;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.id = `matrix${matrixId}-${i}-${j}`;
            input.value = '0'; // Default value
            input.placeholder = '0';
            matrixDiv.appendChild(input);
        }
    }
    
    container.appendChild(matrixDiv);
}


/**
 * Calculates the sum of Matrix A and Matrix B.
 */
function calculateSum() {
    const rowsA = parseInt(document.getElementById('rowsA').value);
    const colsA = parseInt(document.getElementById('colsA').value);
    const rowsB = parseInt(document.getElementById('rowsB').value);
    const colsB = parseInt(document.getElementById('colsB').value);
    const resultContainer = document.getElementById('result_container');

    // 1. Check for compatibility (same dimensions for addition)
    if (rowsA !== rowsB || colsA !== colsB) {
        resultContainer.innerHTML = '<p style="color:red; text-align:center;">' +
            'Error: Matrices must have the same dimensions to be added. ' +
            `Matrix A is ${rowsA}x${colsA} and Matrix B is ${rowsB}x${colsB}.</p>`;
        return;
    }

    // Clear previous result
    resultContainer.innerHTML = '';

    // 2. Prepare the result matrix grid
    const resultDiv = document.createElement('div');
    resultDiv.className = 'matrix result-grid';
    resultDiv.style.gridTemplateColumns = `repeat(${colsA}, auto)`;

    // 3. Perform the matrix addition
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsA; j++) {
            // Retrieve values from Matrix A and B inputs
            const valA = parseFloat(document.getElementById(`matrixA-${i}-${j}`).value) || 0;
            const valB = parseFloat(document.getElementById(`matrixB-${i}-${j}`).value) || 0;
            
            // Calculate the sum
            const sum = valA + valB;
            
            // Create a non-editable input for the result
            const resultInput = document.createElement('input');
            resultInput.type = 'text'; // Use text so it's not a spinner
            resultInput.readOnly = true;
            resultInput.value = sum;
            resultDiv.appendChild(resultInput);
        }
    }

    resultContainer.appendChild(resultDiv);
}