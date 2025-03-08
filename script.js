document.getElementById("form-registration").addEventListener("submit", function(event) {
    event.preventDefault();


    const name = document.getElementById("firstname").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Email:", email);
    console.log("Password:", password);

    this.reset();
});