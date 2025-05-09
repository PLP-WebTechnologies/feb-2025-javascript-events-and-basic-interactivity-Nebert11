//Event Handling
document.getElementById("btn").addEventListener("click", () =>{
    alert("Button Clicked!");
});

document.getElementById("hoverDiv").addEventListener("mouseover", () =>{
    document.getElementById("house").style.backgroundColor = "#f0e68c";
});

document.getElementById("hoverDiv").addEventListener("mouseout", () =>{
    document.getElementById("house").style.backgroundColor = "";
});

document.addEventListener("keydown", (e) => {
    console.log(`You pressed: ${e.key}`);
});

document.getElementById("secretBtn").addEventListener("dblclick", () => {
    alert("You found a secret btn");
});

//Interactive elements
document.getElementById("colorbtn").addEventListener("click", function() {
    this.style.backgroundColor = "lightcoral";
    this.textContent = "Changed!";
});

const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".tab-content").forEach((c) => (c.style.display = "none"));
        document.getElementById(`tab-${tab.dataset.tab}`).style.display = "block";
    });
});

//Form Validation
document.getElementById("myForm").addEventListener("subject", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("feedback");

    if (!email.includes("@")) {
        feedback.textContent = "Invalid Email";
        return;
    }

    if(password.length < 8) {
        feedback.textContent = "Password must be atleast 8 characters";
        return;
    }

    feedback.textContent = "Form submitted successfully";
});

document.getElementById("password").addEventListener("imput", (e) => {
    const feedback = document.getElementById("feedback");

    if(e.target.value.length < 8) {
        feedback.textContent = "Password too short";
    }
    else{
        feedback.textContent = "Looks Good";
    }
});