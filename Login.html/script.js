function showSignUp() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}

function showLogin() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

function showpage() {
   
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "none";
  
    const imageElement = document.querySelector(".image");
    imageElement.style.display = "block"; 
}