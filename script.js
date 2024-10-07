// Function to process the order and generate a receipt
function processOrder() {
    // Get form elements
    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorModal = document.getElementById('errorModal');
    const errorMessage = document.getElementById('errorMessage');
    const receiptSection = document.getElementById('receipt');
    
    // Validate form fields
    if (name === '' || mobile === '' || message === '') {
        showError('All fields are required.');
        return false;
    }
    
    if (!/^\d{9}$/.test(mobile)) {
        showError('Mobile number must be exactly 9 digits.');
        return false;
    }
    
    if (message.length > 100) {
        showError('Message must be 100 characters or less.');
        return false;
    }
    
    // Create the receipt
    generateReceipt(name, mobile, message);
    return false; // Prevent the default form submission
}

// Function to show error messages in a modal
function showError(message) {
    const errorModal = document.getElementById('errorModal');
    const errorMessage = document.getElementById('errorMessage');
    
    errorMessage.textContent = message;
    errorModal.style.display = 'block'; // Show the modal
}

// Function to close the error modal
function closeModal() {
    const errorModal = document.getElementById('errorModal');
    errorModal.style.display = 'none'; // Hide the modal
}

// Function to generate the receipt
function generateReceipt(name, mobile, message) {
    const receiptSection = document.getElementById('receipt');
    const date = new Date(); // Get current date
    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    
    // Clear previous receipt content
    receiptSection.innerHTML = '';

    // Create and append new receipt content
    receiptSection.innerHTML = `
        <h2>Order Receipt</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
        <p><strong>Message on T-Shirt:</strong> ${message}</p>
        <p><strong>Date:</strong> ${formattedDate}</p>
    `;
    receiptSection.style.display = 'block'; // Show the receipt section
}

// Event listener to close modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
    const errorModal = document.getElementById('errorModal');
    if (event.target === errorModal) {
        closeModal();
    }
});
