document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("demoForm");
  let state = document.getElementById("state");

  let username = document.getElementById("username");
  let pass = document.getElementById("password");
  let re = document.getElementById("re-password");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate the form inputs
    if (!username.value || !pass.value || !re.value) {
      state.innerHTML = "Please fill in all fields.";
      return;
    }

    if (pass.value !== re.value) {
      state.innerHTML = "Passwords do not match.";
      return;
    }

    try {
      // Fetch user data
      let response = await fetch(`http://localhost:8080/api/users/user111`);

      if (!response.ok) {
        state.innerHTML = `Error: ${response.status} ${response.statusText}`;
        return;
      }

      let data = await response.json();
      state.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
      state.innerHTML = `Error: ${error.message}`;
    }
  });
});
