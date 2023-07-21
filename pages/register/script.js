const handleRegister = async (e) => {
  console.log("oi");
  const error = document.getElementById("error");
  const errorMessage = document.getElementById("errorMessage");
  error.classList.add("hidden");
  errorMessage.innerHTML = "";
  try {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!email.includes("@") || !email.includes("."))
      throw new Error("Email inválido: " + email);

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) throw new Error("Senhas não conferem");

    const data = {
      name,
      email,
      password,
    };
    const response = await axios.post("http://localhost:3000/user", data);
    console.log(response);

    location.pathname = "pages/login/index.html";
  } catch (err) {
    console.log(err);
    error.classList.remove("hidden");
    if (err.response && err.response.data && err.response.data.message) {
      const message = err.response.data.message;
      errorMessage.innerHTML = message;
      return;
    }

    errorMessage.innerHTML = err.message;

    setTimeout(() => {
      error.classList.add("hidden");
      errorMessage.innerHTML = "";
    }, 3000);
  }
};

const registerButton = document.getElementById("register");
registerButton.addEventListener("click", handleRegister);
