const express = require('express');
const path = require('path');
const { exec } = require("child_process");

const app = express();

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    exec("vlc http://localhost:5000/public/temp/video.mp4", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
})

let port = process.env.PORT || 5000;
app.listen(port, (err) => {
    if (err) {
        console.log('Error:', err.message);
    } else {
        console.log(`Listening on port ${port}`);
    }
})