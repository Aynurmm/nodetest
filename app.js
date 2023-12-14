const express = require('express');
const app = express();
const fs = require('fs');

    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (!err) {
            app.get('/user', function (req, res) {
                res.send(data);
              });
              
        } else {
            res.status(500).send('Error reading data.json');
        }
    });


app.listen(6000, () => {
    console.log('Server is running on port 3000');
});

