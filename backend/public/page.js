const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
const loginForm = document.querySelector(".form-popup .login form");
const signupForm = document.querySelector(".form-popup .signup form");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

// Handle login form submission
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const email = e.target.querySelector('input[type="text"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    try {
        const res = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.status === 200) {
            console.log('Login successful:', data.token);
            // Store the token in localStorage or cookies
            localStorage.setItem('token', data.token);
            // Redirect the user or hide the login popup
            document.body.classList.remove("show-popup");
            // Optionally, redirect to a protected page
            // window.location.href = "/dashboard.html";
        } else {
            console.error('Login failed:', data.message);
            alert('Login failed: ' + data.message);
        }
    } catch (err) {
        console.error('Error:', err);
        alert('An error occurred. Please try again.');
    }
});

// Handle signup form submission
signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const email = e.target.querySelector('input[type="text"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    try {
        const res = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.status === 200 || res.status === 201) {
            console.log('Signup successful:', data);
            // Optionally, log the user in immediately or show a success message
            alert('Signup successful. Please log in.');
            // Switch to the login form
            formPopup.classList.remove("show-signup");
        } else {
            console.error('Signup failed:', data.message);
            alert('Signup failed: ' + data.message);
        }
    } catch (err) {
        console.error('Error:', err);
        alert('An error occurred. Please try again.');
    }
});

