const express = require('express');
const path = require('path');
const app = express();

const router = express.Router();

router.get('/', (req, re) => {
    res.render('contact-us');
});

module.exports = router;

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res) => {
    res.status(404).sendFile(
    path.join(__dirname, 'public', '404page.html'))
});

app.listen(3000, () => {
    console.log("App listening on port 3000");
});