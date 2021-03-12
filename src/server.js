const express = require('express');
const config = require('config');
const PlayerRouter = require('./routers/Player');
const LibrariesRouter = require('./routers/Libraries');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/public', express.static('public'));
for (const lib of config.get('Libraries')) {
    app.use('/libraries', express.static(lib));
}

app.get('/', (req, res) => {
    res.send('berhasil');
})
app.use('/player', PlayerRouter);
app.use('/libraries', LibrariesRouter);

let port = process.env.PORT || 5000;
app.listen(port, (err) => {
    if (err) {
        console.log('Error:', err.message);
    } else {
        console.log(`Listening on port ${port}`);
    }
})