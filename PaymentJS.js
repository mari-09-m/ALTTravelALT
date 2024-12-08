// // ***  1. Payment page's submit JS *****
document.getElementById('mySubmit').addEventListener('click', function () {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const expMonth = document.getElementById('expMonth').value.trim();
    const expYear = document.getElementById('expYear').value.trim();

    // Basic validation
    if (!fullName || !email || !cardNumber || !cvv || !expMonth || !expYear) {
        alert('Please fill in all required fields.');
        return;
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Card number 
    const isValidCard = cardNumber.replace(/\s+/g, '').length === 16; // Basic check
    if (!isValidCard) {
        alert('Invalid card number.');
        return;
    }

    // CVV 
    if (cvv.length < 3 || cvv.length > 4) {
        alert('Invalid CVV.');
        return;
    }
    // Redirect to popup page
    alert('Form submitted successfully!');
    window.location.href = "MariPopUp.html";
});






