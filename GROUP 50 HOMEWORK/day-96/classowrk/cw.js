const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const entered = {
        email: e.target.email.value,
        password: e.target.password.value
    };

    console.log(entered.email);
    console.log(entered.password);

});