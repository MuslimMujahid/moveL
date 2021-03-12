const fs = require('fs');
const config = require('config');
const path = require('path');

exports.getAll = function (req, res) {
    const libraries = config.get('Libraries');
    let dirs = [];
    
    libraries.forEach(lib => {
        let files = fs.readdirSync(lib);
        let filesMap = files.map(file => {
            return {
                "title": file,
                "path": path.join(lib, file)
            }
        })
        dirs = [...dirs, ...filesMap];
    });

    res.status(200).send(dirs);
} 