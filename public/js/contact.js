// contact.js

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

function validateAndSubmit() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Form validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Lütfen tüm alanları doldurunuz.');
        return;
    }

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Geçerli bir e-posta adresi giriniz.');
        return;
    }

    // Send form data to another page (dummy action)
    var formData = {
        name: name,
        email: email,
        message: message
    };
    // You can use AJAX to send data to another page or simply redirect with query parameters
    // For example:
    // window.location.href = 'showFormData.html?name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&message=' + encodeURIComponent(message);
    // For simplicity, I'm just showing an alert with the form data
    alert('Form gönderildi:\nAd: ' + name + '\nE-Posta: ' + email + '\nMesaj: ' + message);
}
