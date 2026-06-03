const express = require("express");

const app = express();

app.use(express.json());

let users = [];

// Home Route
app.get("/", (req, res) => {
    res.send("Backend API is Running");
});

// GET Users
app.get("/users", (req, res) => {
    res.json(users);
});

// POST User
app.post("/users", (req, res) => {

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and Email are required"
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);

    res.status(201).json({
        message: "User Added Successfully",
        user: newUser
    });
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});