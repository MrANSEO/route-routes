// Handle Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validation simple
        if (!email || !password) {
            alert('Please fill all fields');
            return;
        }

        // Sauvegarder l'utilisateur en localStorage
        const user = {
            email: email,
            loginTime: new Date().toISOString()
        };
        localStorage.setItem('user', JSON.stringify(user));

        // Afficher le message de succès
        showSuccessMessage('Login successful! Redirecting...');

        // Rediriger après 1.5 secondes
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    });
}

// Handle Register Form
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.querySelector('input[name="terms"]').checked;

        // Validations
        if (!fullname || !email || !phone || !password || !confirmPassword) {
            alert('Please fill all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters');
            return;
        }

        if (!terms) {
            alert('You must agree to the Terms & Conditions');
            return;
        }

        // Sauvegarder l'utilisateur
        const user = {
            fullname: fullname,
            email: email,
            phone: phone,
            registrationDate: new Date().toISOString()
        };
        localStorage.setItem('user', JSON.stringify(user));

        // Afficher le message de succès
        showSuccessMessage('Account created successfully! Redirecting...');

        // Rediriger après 1.5 secondes
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    });
}

// Fonction pour afficher le message de succès
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    document.body.appendChild(successDiv);

    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// Vérifier si utilisateur est connecté
function checkUserLogin() {
    const user = localStorage.getItem('user');
    if (user) {
        console.log('User logged in:', JSON.parse(user));
    }
}

checkUserLogin();