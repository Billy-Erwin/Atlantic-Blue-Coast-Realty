const photoDirectory = '/../assets/images';
const fs = require('fs');

exports.getPhotosFromDirectory = function(resp, query) {
    let photoList = [];
    fs.readdir(__dirname + photoDirectory + '/' + query.directoryName, (err, files) => {
        files.forEach(file => {
            photoList.push(file);
        });
        resp.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-Requested-With'
        });
        resp.end(JSON.stringify(photoList));
    });
}

