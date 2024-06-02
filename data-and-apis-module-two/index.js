const express = require('express');
const Datastore = require('nedb')
const app = express();
app.listen(3000, () => console.log('listening @ 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}))

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (request, response) => {
    database.find({}, (err, data) => {
        if (err) {
            responce.end();
            return;
        }
    response.json(data);
    });
});

app.post('/api', (request, response) => {
    console.log(request.body);
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data)
    response.json(data)
    // responce.json({
    //     status: 'success',
    //     name: data.name,
    //     latitude: data.latitude,
    //     longitude: data.longitude,
    //     timestamp: timestamp,
    // });
})