const nameInput = document.querySelector("#nameInput");
const courseInput = document.querySelector("#courseInput");
const welcomeMessage = document.querySelector("#welcomeMessage");
const studentForm = document.querySelector("#studentForm");
const themeToggleBtn = document.querySelector("#themeToggleBtn");
const registrationResult = document.querySelector("#registrationResult");

nameInput.addEventListener("input", () => {
  welcomeMessage.textContent = nameInput.value ? `Welcome, ${nameInput.value}!` : "Welcome, Guest!";
});

studentForm.addEventListener("submit", (event) => {
  event.preventDefault(); 
  const name = nameInput.value;
  const course = courseInput.value;
  registrationResult.textContent = `Successfully Registered: ${name} (${course})`;
});


themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    welcomeMessage.textContent = "";
  }
});
