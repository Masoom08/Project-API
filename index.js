const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Routes
app.get('/users', (req , res) => {
    const html = `
    <ul>
        ${users.map((user)=> `<li> ${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

app.get('/api/users', (re,res) => {
    return res.json(users);
});

// Route: Get user by ID
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.json(user);
  });

    // Route: Create a new user (not persisted, just for demo)
app.post('/api/users', (req, res) => {
    // Access body with: req.body
    return res.status(201).json({ status: "pending", message: "User creation not implemented." });
  });

  // Route: Update user by ID (stub)
app.patch('/api/users/:id', (req, res) => {
    return res.json({ status: "pending", message: "User update not implemented." });
  });
  
  // Route: Delete user by ID (stub)
app.delete('/api/users/:id', (req, res) => {
    return res.json({ status: "pending", message: "User deletion not implemented." });
  });
  

app.listen(PORT, () => console.log(`Server Started at PORT :$(PORT)`))