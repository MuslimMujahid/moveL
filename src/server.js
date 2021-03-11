const express = require('express');
const PlayerRouter = require('./routers/Player');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/public', express.static('public'));
app.get('/', (req, res) => {
    res.send('berhasil');
})
app.use('/player', PlayerRouter);

let port = process.env.PORT || 5000;
app.listen(port, (err) => {
    if (err) {
        console.log('Error:', err.message);
    } else {
        console.log(`Listening on port ${port}`);
    }
})