const express = require('express');
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

// Root route handler
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Contacts API",
        version: "1.0",
        endpoints: {
            contacts: {
                list: "GET /api/contacts",
                create: "POST /api/contacts",
                get: "GET /api/contacts/:id",
                update: "PUT /api/contacts/:id",
                delete: "DELETE /api/contacts/:id"
            },
            users: {
                register: "POST /api/users/register",
                login: "POST /api/users/login",
                current: "GET /api/users/current"
            }
        }
    });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/contacts", require('./routes/contactRoutes'));
app.use("/api/users", require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});