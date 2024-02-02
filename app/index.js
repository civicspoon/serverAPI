// API Section
const express = require('express');
const api = express();

api.get('/api/user', async (req, res) => {
    try {
        console.log("api/user");
        res.send({"test": "test"});
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).send("Internal Server Error");
    }
});

api.listen(5000, () => {
    console.log('Server is running on port 5000');
});
