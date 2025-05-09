
const boxes = document.querySelectorAll('.vulnerability-box');
boxes.forEach(box => {
    box.addEventListener('click', function() {
        alert(this.getAttribute('data-message'));
    });
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
 
    alert('Login Successful! Redirecting to Home Page...');
    

    window.location.href = "index.html"; 
});

