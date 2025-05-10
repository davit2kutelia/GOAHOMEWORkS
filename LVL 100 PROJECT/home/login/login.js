function checkInputs() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const title = document.getElementById("title");

  if (email === "" || password === "") {
      title.textContent = "Incorrect password or username";
      title.style.fontSize = "18px";
      title.style.color = "red";
      title.style.marginTop = "48px";
      return false;
  }
  return true;
}