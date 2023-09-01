function createHome() {
  const formDiv = document.createElement("div");
  formDiv.classList.add("Form");
  formDiv.action = "#";

  const form = document.createElement("form");

  const formContent = document.createElement("div");
  formContent.classList.add("form-content");

  const textNote = document.createElement("div");
  textNote.classList.add("text-note");
  textNote.textContent = "Sign up now. Start your new journey";

  const name = document.createElement("div");
  name.classList.add("name");
  name.textContent = "Name";

  const email = document.createElement("div");
  email.classList.add("email");
  email.textContent = "Email";

  const password = document.createElement("div");
  password.classList.add("password");
  password.textContent = "Password";

  const confirm = document.createElement("div");
  confirm.classList.add("confirm");
  confirm.textContent = "Confirm Password";

  formDiv.appendChild(form);
  form.appendChild(formContent);
  formContent.appendChild(textNote);
  formContent.appendChild(name);
  formContent.appendChild(email);
  formContent.appendChild(password);
  formContent.appendChild(confirm);

  return formDiv;
}

function loadHome() {
  const container = document.querySelector("#container");
  container.appendChild(createHome());
}

export default loadHome;
