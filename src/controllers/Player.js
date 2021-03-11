const { exec } = require('child_process');
const time = require('../utils/time');

exports.play = function (req, res) {
    exec(`vlc ${req.body.URL}`, async (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        const start = time.getTimeMiliseconds();
        
        console.log("yout start watching on", start);
        if (stderr) {
            console.log('you stopped at', time.getTimeMiliseconds()-start);
        }
    });
    res.status(200).send('berhasil');
}

