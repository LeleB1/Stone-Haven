const express = require('express');
const path = require('path');
const fs =require('fs');
const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-us.html'));
});

app.post('/submit', (req, res) => {
    const formData = req.body;
    console.log("Received form data: ", formData);

    const filePath = path.join(__dirname, 'messages.txt');
    const entry = `Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.tel},  Message: ${formData.message}. \n`;

    console.log("Appending to file: ", filePath);

    fs.appendFile(filePath, entry, (error) => {
        if(error) {
            console.error("Trouble saving data: ", error);
            return res.status(500).send('Error saving data.');
        }

        console.log("Data successfully appended!");

        res.send(`
        <h1 style="text-align: center; margin-top: 50vh; transform: translateY(-50%);">
            Message sent successfully!
        </h1>`);
    });
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});