const userForm = document.getElementById('userForm');
// const userTable = document.getElementById('userTable').querySelector('tbody');

// Fetch data from the API and display it in an HTML table
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("http://localhost:8080/users");
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const users = await response.json(); // Parse the JSON data

    // Query the HTML table
    const tableBody = document.querySelector("#userTable tbody");

    // Map the data and populate the table
    users.forEach((user) => {
      const row = document.createElement("tr");

      // Create table cells for each user field
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${new Date(user.createdAt).toLocaleString()}</td>
        <td>${new Date(user.updatedAt).toLocaleString()}</td>
      `;

      // Append the row to the table
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
});

// Add user
userForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(userForm);
  const user = Object.fromEntries(formData.entries());
  await fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  // fetchUsers();
  userForm.reset();
});

document.querySelector("#testTile").innerHTML = "Hello World!";

