// DOM Elements
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Toggle Forms
loginBtn.addEventListener('click', () => {
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
    signupBtn.classList.add('active');
    loginBtn.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
});

// Form Submission Simulation
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Welcome back, ${loginForm.username.value}!`);
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Thank you for signing up, ${signupForm.username.value}!`);
});
