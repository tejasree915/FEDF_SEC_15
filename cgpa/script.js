document.getElementById('cgpaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from submitting normally

    const name = document.getElementById('studentName').value;
    const roll = document.getElementById('rollNumber').value;
    const cgpa = document.getElementById('cgpa').value;

    if (name && roll && cgpa) {
        // Log the data (in a real app, you'd send this to a server)
        console.log(`Adding CGPA: Name=${name}, Roll=${roll}, CGPA=${cgpa}`);
        
        // Display the confirmation alert, similar to the screenshot
        alert('Student CGPA Added Successfully!');

        // Optional: Reset the form fields after successful submission
        // this.reset(); 
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('downloadPdfBtn').addEventListener('click', function() {
    alert('PDF Download functionality would be implemented here (requires a library like jsPDF).');
    // For a real application, you would use a library like jsPDF to generate the document
    /* const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Student CGPA Report", 10, 10);
    doc.text(`Name: ${document.getElementById('studentName').value}`, 10, 20);
    doc.text(`CGPA: ${document.getElementById('cgpa').value}`, 10, 30);
    doc.save("CGPA_Report.pdf");
    */
});